import { SchemaTypeDefinition } from "sanity";
import { PackageIcon } from "@sanity/icons";

export const Product: SchemaTypeDefinition = {
  name: "product",
  title: "Proudcts",
  type: "document",
  icon: PackageIcon,
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "productColorCode",
      title: "Product Color Code",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "small",
      title: "Small Product Size",
      type: "boolean",
    },
    {
      name: "medium",
      title: "Medium Product Size",
      type: "boolean",
    },
    {
      name: "large",
      title: "Large Product Size",
      type: "boolean",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "off",
      title: "Product % off",
      type: "number",
    },
    {
      name: "oldprice",
      title: "Old Price",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
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
  preview: { select: { title: "title", media: "images.0.asset" } },
};
