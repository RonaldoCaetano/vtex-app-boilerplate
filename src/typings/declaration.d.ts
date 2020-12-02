declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}