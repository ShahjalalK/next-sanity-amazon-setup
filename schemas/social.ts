import { SchemaTypeDefinition } from "sanity";

const Social : SchemaTypeDefinition = {
    name : 'social',
    title : 'Social',
    type : 'document',
    fields : [
        {
            name : 'title',
            title : 'Title',
            description : 'Platform for social media',
            type : 'string'            
        },
        {
            name : 'url',
            title : 'Url',
            type : 'url'
        }
    ]

}

export default Social