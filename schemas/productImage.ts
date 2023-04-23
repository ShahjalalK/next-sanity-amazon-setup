import { SchemaTypeDefinition } from "sanity";

export const ProductImage : SchemaTypeDefinition = {
    name : 'productImage',
    title : 'Product Image',
    type : 'document',
    fields : [
        {
            name : 'title',
            title : 'Title',
            type : 'string'
        },
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {hotspot : true},
            validation : (Rule) => Rule.required()
        },
        {
            name : 'color',
            title : 'Color',
            description : 'Choose the product color',
            type : 'color',
            validation : (Rule) => Rule.required()
        }
    ],
    preview : {select : {title : 'title', media : 'image'}}
}