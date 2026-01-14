import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'templeg',

  projectId: 'uojz0t7y',
  dataset: 'temple',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
