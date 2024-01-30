import React, { useState } from 'react';
import {Main, Title} from './styles';
import getBreeds from '../../services/get-breed';

export default function Home() {
  const [breeds, setBreeds] = useState([]);

  const handleListBreeds = async () => {
    const {data} = await getBreeds.get(`?limit=100&page=0`).catch(() => {
      alert("Repository not found");
    });

    setBreeds(data);
  }

  return (
    <Main>
      <Title>Raças de cachorro: guia completo das raças</Title>
      <button onClick={handleListBreeds}>Clique</button>
      {console.log(breeds)}
      <table>
        {breeds.map(breed => <tr>
          <td>{breed.name}</td>
          <td>{breed.origin}</td>
          <td>{breed.temperament}</td>
        </tr>)}
      </table>
    </Main>
  )
}
