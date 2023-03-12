import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 0.9 0;
  margin: 50px 0;
`;

export const GameName = styled.span`
  display: block;
  font-size: 4.5rem;
  paddin-bottom: 10px;
`;

export const Introduction = styled.span`
  display: block;
  font-size: 1rem;
  padding-bottom: 30px;
`;

export const Subtitle = styled.span`
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0.5rem;
`;

export const Description = styled.p`
  max-width: 400px;
  line-heigth: 1.8rem;
  padding: 1rem;
`;
export const PhotoContainer = styled.div`
  width: 800px;
  height: 300px;
  padding-left: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
