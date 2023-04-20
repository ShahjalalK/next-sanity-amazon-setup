import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { colorInput } from "@sanity/color-input";
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const config =  defineConfig({
  basePath : '/admin',
  name: 'default',
  title: 'sanityyoutube',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), media(), colorInput()],

  schema: {
    types: schemaTypes,
  }
 
})

