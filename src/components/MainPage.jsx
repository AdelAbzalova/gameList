import GameCard from "./GameCard";
import { useEffect } from "react";
import PlatformFilter from "./PlatformFilter";
import { Row, Col, Button } from "antd";
import GenreFilter from "./GenreFilter";
import Loading from "./Loading";
import Error from "./Error.jsx";
import Sort from "./Sort";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../store/gameSlice";
import { clearFilters } from "../store/gameSlice";

export default function MainPage() {
  const isLoading = useSelector(state=> state.games.loading)
  const isError = useSelector(state=> state.games.error)
  const list=useSelector(state=> state.games.list);
  const platform= useSelector(state=> state.games.platform );
  const genre= useSelector(state=> state.games.genre );
  const sort= useSelector(state=> state.games.sort );
const dispatch = useDispatch();

  useEffect(()=>{
dispatch(fetchGames());
  }, [sort, platform, genre, dispatch])

  const gameCard =
    list &&
    list.map((game) => (
      <Col xl={5} md={7} sm={10} xs={22} key={game.id}>
        <GameCard game={game} />
      </Col>
    ));

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <div>
          <Row gutter={[0, 12]} justify="center" className="mtb-20">
            <Col xs={20} md={10} lg={6}>
              Платформа:
              <PlatformFilter  />
            </Col>
            <Col xs={20} md={10} lg={6}>
              Жанр: <GenreFilter />
            </Col>
            <Col xs={20} md={10} lg={6}>
              Сортировать по: <Sort />
            </Col>
            <Col xs={20} md={10} lg={2}>
              <Button danger onClick={()=>dispatch(clearFilters())}>
                Очистить
              </Button>
            </Col>
          </Row>

          <Row gutter={[16, 16]} justify="center">
            {gameCard}
          </Row>
        </div>
      )}
    </>
  );
}
