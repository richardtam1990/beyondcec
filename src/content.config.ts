import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const homepage = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/homepage",
  }),

  schema: z.object({
    hero_title: z.string(),
    hero_description: z.string(),

    about_title: z.string(),
    about_heading_top: z.string(),
    about_heading_highlight: z.string(),
    about_heading_bottom: z.string(),

    about_description: z.string(),
    about_description_2: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),

    location: z.string(),

    category: z.string(),

    year: z.string(),

    /*
     * Project Gallery
     * 一个项目可以拥有多张图片
     */
    images: z.array(z.string()).min(1),

    description: z.string(),

    floors: z.string(),

    area: z.string(),

    system: z.string(),
  }),
});

export const collections = {
  homepage,
  projects,
};