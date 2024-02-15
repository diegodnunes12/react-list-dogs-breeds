import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 30px auto;

  a {
    color: #444;
    text-decoration: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  display: block;
  color: #fafafa;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

export const Temperament = styled.div`
  margin-top: 50px;

  h2 {
    font-size: 26px;
  }

  ul {
    display: flex;
    gap: 35px;
    padding-left: 0;

    li {
      font-size: 22px;

      &:first-child {
        list-style-type: none;
      }
    }
  }
`;