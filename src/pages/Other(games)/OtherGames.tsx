import Card from "./card";
import { Container } from "./styles";

const OtherGames = () => {
  <></>;

  return (
    <Container>
      <Card
        imageUrl={require("../../assets/Valorant.jpg")}
        title="Valorant"
        text="Valorant is a team-based first-person shooter game."
        externalLink="https://playvalorant.com/pt-br/"
      />
      <Card
        imageUrl={require("../../assets/wildirft.jpg")}
        title="Wild Rift"
        text="Wild Rift is a mobile version of the popular PC game League of Legends, designed for shorter matches and optimized for touch screen devices."
        externalLink="https://wildrift.leagueoflegends.com/en-gb/"
      />
      <Card
        imageUrl={require("../../assets/TFT.png")}
        title="Team Fight Tactics"
        text="TFT is an auto-battler game mode in League of Legends where players use a deck of champions to fight against other players in a battle arena."
        externalLink="https://teamfighttactics.leagueoflegends.com/pt-br/"
      />
    </Container>
  );
};
//todo, fill in the blanks, adjust the cards s that they are in place, go over all the 20 points given by professor (understand if typescript is correctly applied) if time is available try to complete modal

export default OtherGames;
