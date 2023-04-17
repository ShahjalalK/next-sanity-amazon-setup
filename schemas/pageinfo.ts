import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageinfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
   {
    name : 'name',
    title : "Name",
    type : 'string'
   },
   {
    name : 'role',
    title : 'Role',
    type : 'string'
   },
   {
    name : 'heroImage',
    title : 'Image',
    type : 'image',
    options : {
      hotspot : true
    }
   },
   {
    name : 'backgroundInformation',
    title : 'Background Infromation',
    type : 'string'
   },
   {
    name : 'profilePic',
    title : 'Profile Picture',
    type : 'image',
    options : {
      hotspot : true
    }
   },
   {
    name : 'phonenumber',
    title : 'Phone Number',
    type : 'string'
   },
   {
    name : 'email',
    title : 'Email',
    type : 'string'
   },
   {
    name : 'address',
    title : 'Address',
    type : 'string'
   },
   {
    name : 'socials',
    title : 'Socials',
    type : 'array',
    of : [
      {
        type : 'reference', to :{type : 'social'}
      }
    ]
   }   
   
  ] 
  
})
