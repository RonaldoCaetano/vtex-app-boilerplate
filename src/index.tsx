import React, { FunctionComponent } from 'react'

import styles from './styles.module.css'
import ExampleContent from './components/ExampleContent'

const Example: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ExampleContent />
    </div>
  )
}

export { Example }
