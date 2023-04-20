import { SchemaTypeDefinition } from "sanity";
import { AddCircleIcon } from "@sanity/icons";

export const Category: SchemaTypeDefinition = {
  name: "category",
  title: "Category",
  type: "document",
  icon: AddCircleIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview : {select : {title : 'name', media : 'image'}}
};
