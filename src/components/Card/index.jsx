import React from 'react'
import { Container } from './styles'

export default function Card({title, info}) {
  return (
    <Container>
        <div className='title'>{title}</div>
        <div className='info'>{info}</div>
    </Container>
  )
}
