import { useSelector } from "react-redux";
import Filter from "./Filter";
import { changeSort } from "../store/gameSlice";

export default function Sort(props) {
  const sort=useSelector(state=> state.games.sort)
  const options = [
    {
      value: "release-date",
      label: "Дате релиза",
    },
    {
      value: "popularity",
      label: "Популярности",
    },
    {
      value: "alphabetical",
      label: "Алфавиту",
    },
    {
      value: "relevance",
      label: "Актуальности",
    },
  ];
  return (
    <Filter
      placeholder="сортировку"
      options={options}
      setFilter={changeSort}
      value={sort}
    />
  );
}
