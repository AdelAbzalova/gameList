import { useSelector } from "react-redux";
import Filter from "./Filter"; 
import { changePlatform } from "../store/gameSlice";

export default function PlatformFilter() {
  const platform = useSelector(state=> state.games.platform )
  const options = [
    {
      value: "pc",
      label: "Windows (PC)",
    },
    {
      value: "browser",
      label: "Browser (Web)",
    },
  ];
  return (
    <Filter
      placeholder="платформу"
      options={options}
      setFilter={changePlatform}
      value={platform}
    />
  );
}
