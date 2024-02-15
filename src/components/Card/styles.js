import styled from "styled-components";

export const Container = styled.div`
  width: 25%;
  border: solid 1px #fafafa;
  border-radius: 10px;
  height: 100px;
  padding: 30px;
  margin: 20px 0;
  position: relative;
  
  .title {
    background: #fafafa;
    color: #111111;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 30px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info {
    font-size: 26px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;