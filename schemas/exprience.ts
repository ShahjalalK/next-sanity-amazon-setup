import { SchemaTypeDefinition } from "sanity";

const Exprience : SchemaTypeDefinition = {
    name : 'exprience',
    title : 'Exprience',
    type : 'document',
    fields : [
        {
            name : 'jobTitle',
            title : 'Job Title',
            type : 'string'
        },
        {
            name : 'companyImage',
            title : 'Company Image',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'company',
            title : 'Comapny',
            type : 'text'

        },
        {
            name : 'dateStarted',
            title : 'Date Started',
            type : 'date',
        },
        {
            name : 'dateEnded',
            title : 'Date Ended',
            type : 'date'
        },
        {
            name : 'isCurrentlyWorkingHere',
            title : 'Is Currently Working Here',
            type : 'boolean'
        },
        {
            name : 'technologiles',
            title : 'Technologiles',
            type : 'array',
            of : [{type : 'reference', to : {type : 'skill'}}]
        },
        {
            name : 'points',
            title : 'Points',
            type : 'array',
            of : [{type : 'string'}]
        }
    ]
}

export default Exprience