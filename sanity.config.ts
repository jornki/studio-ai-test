import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {assist} from '@sanity/assist'

export default defineConfig({
  name: 'default',
  title: 'ai-test',

  projectId: 'p9yj2l5l',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), assist()],

  schema: {
    types: schemaTypes,
  },
})
