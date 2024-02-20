import Filter from "./Filter";
import { changeGenre } from "../store/gameSlice";
import { useSelector } from "react-redux";

const genres = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];
const options = [];
genres.map((genre) => 
  options.push({
    label: genre,
    value: genre,
  })
);

export default function GenreFilter() {
const genre= useSelector(state=> state.games.genre)
  return (
    <Filter
      placeholder="жанр"
      options={options}
      setFilter={changeGenre}
      value={genre}
    />
  );
}
