import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 450px;
  background-color: ${(props) => props.theme.palette.terciary};
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  padding-top: 40px;
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const CardTitle = styled.a`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
  text-align: center;
  color: ${(props) => props.theme.palette.primary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.palette.secondary};
    cursor: pointer;
  }
`;

export const CardText = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 8px;
  color: ${(props) => props.theme.palette.text.primary};
  max-width: 100%;
  max-height: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
