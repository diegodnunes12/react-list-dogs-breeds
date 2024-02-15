import React, { useEffect, useState } from 'react';
import {Main, Section, Table, Title} from './styles';
import getBreeds from '../../services/get-breed';
import Dog from '../../components/Dog';

export default function Home() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      const {data} = await getBreeds.get().catch(() => {
        console.log('error')
      });
  
      setBreeds(data);
    }

    loadBreeds().catch(console.error);
  }, [setBreeds]);

  return (
    <Main>
      <Title>Raças de cachorro: guia completo das raças</Title>
      {console.log(breeds)}
      <Section>
        {breeds.map(breed => <Dog breed={breed} />)}
      </Section>
    </Main>
  )
}
