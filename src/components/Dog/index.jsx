import React from 'react'
import { Container, Image, Name } from './styles'
import { Link } from 'react-router-dom'

export default function Dog({breed}) {
  const url = breed.name.toLowerCase().replaceAll(' ', '-');
  return (
    <Container>
      <Link to={`/details/${url}`} state={breed}><Image src={breed.image.url}></Image></Link>
      <Link to={`/details/${url}`} state={breed}><Name>{breed.name}</Name></Link>
    </Container>
  )
}
