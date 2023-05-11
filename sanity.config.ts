import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './src/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'Soderlind Sanity',

  projectId: 'qh5dilp9',
  dataset: 'production',

  plugins: [deskTool({defaultDocumentNode}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
