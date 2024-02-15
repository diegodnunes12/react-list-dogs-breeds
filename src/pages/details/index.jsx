import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CardsContainer, Container, Header, Image, Temperament, Title } from './styles';
import Card from '../../components/Card';

export default function Details() {
  const location = useLocation();
  const breed = location.state

  return (
    <Container>
      <div>
        <Link to="/">Home</Link>
        <Header>
          <Image src={breed.image.url}></Image>
          <div>
            <Title>{breed.name}</Title>
            <p>{breed.bred_for}</p>
          </div>
        </Header>        
        <Temperament>
          <h2>Temperament</h2>
          <ul>
            {
              breed.temperament.split(',').map(temperament => <li>{temperament}</li>)
            }
          </ul>
        </Temperament>
        <CardsContainer>
          <Card title="Group" info={breed.breed_group} />
          <Card title="Origin" info={breed.origin} /> 
          <Card title="Height" info={breed.height.metric} />
          <Card title="Weight" info={breed.weight.metric} />
        </CardsContainer>
      </div>
    </Container>
  )
}
