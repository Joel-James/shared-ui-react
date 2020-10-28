import React from 'react'
import { wrapper } from '../components/wrapper'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag {...props}>
      <a href={'#' + props.id}>
        {props.children}
      </a>
    </Tag>
  )
}

export default {
  wrapper,
  pre: props => props.children,
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
