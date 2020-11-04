import React from 'react'

import { Example } from '../src'

const Adapter: React.FunctionComponent = () => {
  return <Example />
}

Adapter.defaultProps = {
  schema: {
    title: 'editor.CHANGE_ME.title',
    description: 'editor.CHANGE_ME.description',
    type: 'object',
    properties: {},
  },
}

export default Adapter
