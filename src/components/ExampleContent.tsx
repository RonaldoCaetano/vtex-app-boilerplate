import React, { FunctionComponent } from 'react'

import styles from '../styles.module.css'

const ExampleContent: FunctionComponent = (props) => {
  return (
    <div className={styles.content}>
      <div>{props.children}</div>
    </div>
  )
}

export default ExampleContent
