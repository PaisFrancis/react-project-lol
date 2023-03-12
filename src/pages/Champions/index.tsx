import { useEffect, useState } from "react";
import Champion from "./types";
import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  ChampionContainer,
  ChampionCard,
  ChampionImage,
  ChampionName,
  ChampionRole,
} from "./styles";

const ChampionsPage = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const championsData: Champion[] = Object.values(data.data);
        setChampions(championsData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Unable to fetch champions data");
      });
  }, []);

  const handleRoleFilterChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRoleFilter(event.target.value);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(event.target.value);
  };

  const filteredChampions = champions.filter((champion) => {
    const nameMatch = champion.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const roleMatch = roleFilter ? champion.tags.includes(roleFilter) : true;
    return nameMatch && roleMatch;
  });

  if (loading) {
    return <p>Loading champions...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Form>
        <InputGroup>
          <Label htmlFor="role-filter">Filter by role:</Label>
          <select
            id="role-filter"
            onChange={handleRoleFilterChange}
            value={roleFilter}
          >
            <option value="">All roles</option>
            <option value="Assassin">Assassin</option>
            <option value="Fighter">Fighter</option>
            <option value="Mage">Mage</option>
            <option value="Marksman">Marksman</option>
            <option value="Support">Support</option>
            <option value="Tank">Tank</option>
          </select>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="name-filter">Filter by name:</Label>
          <Input
            type="text"
            id="name-filter"
            value={search}
            onChange={handleSearchInputChange}
            placeholder="Search by champion name"
          />
        </InputGroup>
      </Form>
      {filteredChampions.length === 0 ? (
        <p>No champions found.</p>
      ) : (
        <ChampionContainer>
          {filteredChampions.map((champion) => (
            <ChampionCard key={champion.id}>
              <ChampionImage
                src={`http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/${champion.image.full}`}
                alt={champion.name}
              />
              <ChampionName>{champion.name}</ChampionName>
              <ChampionRole>{champion.tags}</ChampionRole>
            </ChampionCard>
          ))}
        </ChampionContainer>
      )}
    </Container>
  );
};

//Todo check ChatGPT to complete API with role and image. It's all possible we have all the data in the console
export default ChampionsPage;
