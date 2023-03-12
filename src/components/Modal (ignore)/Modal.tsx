/* import React from "react";
import {
  ChampionBlurb,
  ChampionImage,
  ChampionModalProps,
  ChampionName,
  ChampionTitle,
  CloseButton,
  ModalBox,
  ModalWrapper,
} from "./styles";

const ChampionModal: React.FC<ChampionModalProps> = ({
  show,
  handleClose,
  name,
  title,
  blurb,
  imageUrl,
}) => {
  if (!show) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalBox>
        <CloseButton onClick={handleClose}>×</CloseButton>
        <ChampionName>{name}</ChampionName>
        <ChampionTitle>{title}</ChampionTitle>
        <ChampionBlurb>{blurb}</ChampionBlurb>
        <ChampionImage src={imageUrl} alt={name} />
      </ModalBox>
    </ModalWrapper>
  );
};

export default ChampionModal;
 */
