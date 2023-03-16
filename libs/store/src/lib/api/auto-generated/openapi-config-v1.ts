import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: '../../../../../../apps/back/swagger.json',
  apiFile: './auto-generated-base.api.ts',
  apiImport: 'autoGeneratedBaseApi',
  outputFile: 'auto-generated.api.ts',
  exportName: 'autoGenerated',
  tag: true,
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
  responseSuffix: 'ResponseDto',
  argSuffix: 'RequestDto',
  flattenArg: false,
}

export default config
