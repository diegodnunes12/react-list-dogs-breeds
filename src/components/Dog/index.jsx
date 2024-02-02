import React from 'react'
import { Container, Image, Name } from './styles'

export default function Dog({breed}) {
  return (
    <Container>
      <Image src={breed.image.url}></Image>
      <Name>{breed.name}</Name>
    </Container>
  )
}
