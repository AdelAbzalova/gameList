import { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameData from "./GameData";
import Loading from "./Loading";
import Error from "./Error.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "../store/gameSlice";

export default function GamePage() {
  const { id } = useParams();
  const isLoading = useSelector(state=> state.games.loading)
  const isError = useSelector(state=> state.games.error)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchGame(id));
  }, [id, dispatch])



  return (
    <>
      {isLoading ? <Loading /> : isError ? <Error /> : <GameData  />}
    </>
  );
}
