import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const getServerInfo = createServerFn({ method: "GET" }).handler(async () => ({
  renderedAt: new Date().toISOString(),
}));

export const listProjects = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const base44 = context.getBase44();
  const page = await base44.asServiceRole.entities.Project.filter(
    { published: true },
    { sort: "order", limit: 60 }
  );
  const items = page?.items ?? page ?? [];
  return items.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description ?? "",
    location: project.location ?? "",
    image: project.image_url,
    alt: project.alt || project.title,
    featured: Boolean(project.featured),
    isDemo: project.is_demo !== false,
    order: project.order ?? 0,
  }));
});

/** Adres, na który trafiają powiadomienia o nowych zapytaniach z formularza. */
const INQUIRY_NOTIFY_EMAIL = "maciejsroda@gmail.com";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Podaj imię.").max(120),
  email: z.string().trim().email("Podaj poprawny adres e-mail.").max(200),
  phone: z.string().trim().max(40).optional().nullable(),
  project_type: z.string().trim().min(1).max(80),
  location: z.string().trim().min(2, "Podaj miejsce realizacji.").max(160),
  scope: z.string().trim().max(2000).optional().nullable(),
  message: z.string().trim().min(10, "Napisz kilka słów o projekcie.").max(4000),
  attachment_uri: z.string().trim().max(600).optional().nullable(),
  attachment_name: z.string().trim().max(200).optional().nullable(),
  source_path: z.string().trim().max(200).optional().nullable(),
  consent: z.literal(true),
  website: z.string().max(0).optional().nullable(),
});

/**
 * Publiczny endpoint formularza kontaktowego.
 * Zapis odbywa się po stronie serwera (service role), dzięki czemu zapytania
 * pozostają prywatne, a anonimowy odwiedzający nie ma dostępu do bazy.
 */
export const submitInquiry = createServerFn({ method: "POST" })
  .validator((input) => inquirySchema.parse(input))
  .handler(async ({ data, context }) => {
    const linkCount = (data.message.match(/https?:\/\//gi) || []).length;
    if (linkCount > 3) {
      throw new Error("Wiadomość zawiera zbyt wiele linków. Napisz do nas bezpośrednio.");
    }

    const base44 = context.getBase44();
    const record = await base44.asServiceRole.entities.Inquiry.create({
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      project_type: data.project_type,
      location: data.location,
      scope: data.scope || "",
      message: data.message,
      attachment_uri: data.attachment_uri || "",
      attachment_name: data.attachment_name || "",
      source_path: data.source_path || "",
      status: "nowe",
    });

    const lines = [
      "Nowe zapytanie z formularza HiWall",
      "",
      `Imię: ${data.name}`,
      `E-mail: ${data.email}`,
      data.phone ? `Telefon: ${data.phone}` : null,
      `Rodzaj projektu: ${data.project_type}`,
      `Miejsce realizacji: ${data.location}`,
      data.scope ? `Zakres: ${data.scope}` : null,
      "",
      "Wiadomość:",
      data.message,
      data.attachment_name ? `Załącznik: ${data.attachment_name} (plik prywatny w panelu)` : null,
      data.source_path ? `Strona: ${data.source_path}` : null,
    ].filter(Boolean);

    // Powiadomienie e-mail jest dodatkiem do zapisu — jego błąd nie może
    // zablokować wysłania formularza.
    try {
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: INQUIRY_NOTIFY_EMAIL,
        from_name: "HiWall – formularz",
        subject: `Nowe zapytanie: ${data.project_type} – ${data.name}`,
        body: lines.join("\n"),
      });
    } catch (error) {
      console.error("Nie udało się wysłać powiadomienia o zapytaniu:", error?.message);
    }

    return { ok: true, id: record.id };
  });