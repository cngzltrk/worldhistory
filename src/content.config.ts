import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const eventSchema = z.object({
  year: z.number(),
  era: z.enum(["BCE", "CE"]),
  title: z.string(),
  region: z.string().optional(),
  summary: z.string().optional(),
  image: z.string().optional(),
});

const dunyaTarihi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dunya-tarihi" }),
  schema: eventSchema,
});

const dinTarihi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/din-tarihi" }),
  schema: eventSchema,
});

const ekonomikTarih = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ekonomik-tarih" }),
  schema: eventSchema,
});

const turkiyeTarihi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/turkiye-tarihi" }),
  schema: eventSchema,
});

const kurtTarihi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/kurt-tarihi" }),
  schema: eventSchema,
});

const amerikaTarihi = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/amerika-tarihi" }),
  schema: eventSchema,
});

export const collections = {
  "dunya-tarihi": dunyaTarihi,
  "din-tarihi": dinTarihi,
  "ekonomik-tarih": ekonomikTarih,
  "turkiye-tarihi": turkiyeTarihi,
  "kurt-tarihi": kurtTarihi,
  "amerika-tarihi": amerikaTarihi,
};
