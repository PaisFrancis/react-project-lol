import NextPageButton from "../../components/NextPageButton";
import {
  Container,
  Description,
  GameName,
  Image,
  Introduction,
  PhotoContainer,
  Subtitle,
  Wrapper,
} from "./styles";

const Intro = () => {
  return (
    <Container>
      <h1 style={{ marginLeft: 100 }}>
        <Introduction>Brought to you by Riot Games...</Introduction>
        <GameName>League Of Legends</GameName>
        <Subtitle>
          a game that can get picked relatively easily but that has and
          impressive depth!
        </Subtitle>
      </h1>
      <Wrapper>
        <Description>
          League Of Legends is a MOBA(multiplayer online battle arena)game. This
          means that the game is played in matches and each match is completly
          independant of one another. You log on to the client and press play
          game and select what game-mode you want to play, the standard game
          mode is in a map called summoners rift and this is the one I will be
          referring to. You then get to choose your character, each of them
          being completly unique but sharing some standard roles:, marksman,
          assasin, fighter and tank.
        </Description>
        <PhotoContainer>
          <Image
            src={require("../../assets/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3.jpg")}
          />
        </PhotoContainer>
      </Wrapper>
      <NextPageButton path="/about" label="Learn more!" />
    </Container>
  );
};

export default Intro;
