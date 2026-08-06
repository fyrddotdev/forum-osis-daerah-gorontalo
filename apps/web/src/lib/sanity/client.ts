import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_SANITY_DATASET,
  apiVersion: "2026-05-15",
  useCdn: false,
});

const builder = createImageUrlBuilder(client);
export function urlFor(source: string) {
  return builder.image(source);
}
