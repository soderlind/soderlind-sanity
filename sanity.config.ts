import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defaultDocumentNode} from './src/defaultDocumentNode'
import {codeInput} from '@sanity/code-input'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'Soderlind Sanity',

  projectId: 'qh5dilp9',
  dataset: 'production',

  plugins: [deskTool({defaultDocumentNode}), visionTool(), codeInput(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})
