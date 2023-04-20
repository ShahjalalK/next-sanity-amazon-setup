import { SchemaTypeDefinition } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const HomeBannerSlider: SchemaTypeDefinition = {
  name: "homeBanerSlider",
  title: "Home Slider Banner",
  type: "document",
  icon: ImageIcon,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      name: "title",
      title: "Titls",
      type: "string",
    },
  ],
  preview: { select: { title: "title", media: "images.0.asset" } },
};
