import { SchemaTypeDefinition } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const HomePageInfo: SchemaTypeDefinition = {
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    {
      name: "logo",
      title: "Header Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "favoriteColor",
      title: "Favorite color",
      type: "color",
    },
  ],
};
