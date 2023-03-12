import React from "react";
import { CardContainer, CardImage, CardText, CardTitle } from "./styles";

interface CardProps {
  imageUrl: string;
  title: string;
  text: string;
  externalLink: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, text, externalLink }) => {
  const handleTitleClick = () => {
    window.open(externalLink, "_blank");
  };
  return (
    <CardContainer>
      <CardImage src={imageUrl} />
      <CardTitle onClick={handleTitleClick}>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default Card;
