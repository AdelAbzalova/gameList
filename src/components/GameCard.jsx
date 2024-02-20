import { Image, Card, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

export default function GameCard(props) {
  const game = props.game;
  const release_date = props.game.release_date.split("-").reverse().join(".");
  return (
    <Link to={`/${game.id}`} style={{ textDecoration: "none" }}>
      <Card
        hoverable
        cover={<Image preview={false} src={game.thumbnail} alt="poster" />}
      >
        <Title level={3}> {game.title}</Title>
        <div>Жанр: {game.genre} </div>
        <div> Издатель: {game.publisher}</div>
        <div>Дата релиза: {release_date} </div>
      </Card>
    </Link>
  );
}
