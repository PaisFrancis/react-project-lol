import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  margin-bottom: 16px;
  width: 300px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: #f5f5f5;
  margin-top: 8px;
`;

export const Select = styled.select`
  padding: 12px 16px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background-color: #f5f5f5;
  margin-top: 8px;
`;

export const Option = styled.option`
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #008cba;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #00657d;
  }
`;

export const ChampionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
`;

export const ChampionCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ChampionImage = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const ChampionName = styled.h3`
  margin: 16px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const ChampionRole = styled.p`
  margin: 0 16px 16px 16px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: #999999;
`;
