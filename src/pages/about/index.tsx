import NextPageButton from "../../components/NextPageButton";
import {
  Container,
  Description,
  GameName,
  Introduction,
  Subtitle,
  Wrapper,
} from "./styles";

const About = () => {
  return (
    <Container>
      <h1 style={{ marginLeft: 100 }}>
        <Introduction>Brought to you by Riot Games...</Introduction>
        <GameName>League Of Legends</GameName>
        <Subtitle>
          a game that can get picked relatively easily but that has an
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
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel
          nisi et exercitationem molestias dicta, error amet quidem assumenda
          cum officiis adipisci aspernatur praesentium corrupti accusantium
          placeat, velit fuga. Nostrum maxime perspiciatis exercitationem,
          libero possimus obcaecati quas commodi magnam. Molestias sed ea fugit.
          Tenetur quidem eius aperiam architecto ex consectetur.
        </Description>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel
          nisi et exercitationem molestias dicta, error amet quidem assumenda
          cum officiis adipisci aspernatur praesentium corrupti accusantium
          placeat, velit fuga. Nostrum maxime perspiciatis exercitationem,
          libero possimus obcaecati quas commodi magnam. Molestias sed ea fugit.
          Tenetur quidem eius aperiam architecto ex consectetur.
        </Description>
      </Wrapper>
      <NextPageButton
        path="/champions"
        label="Check out our characters! (aka Champions)"
      />
    </Container>
  );
};

export default About;
