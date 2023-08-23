import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;
  console.log("MovieCard Component:-", movie);

  const navigate = useNavigate();

  function handleClick() {
    let movieId = movie.show.id;
    navigate(`/bookmovie/${movieId}`, { state: { movie } });
  }

  return (
    <>
      <Card style={{ width: "15rem" }}>
        {movie.show && movie.show.image && movie.show.image.original && (
          <Card.Img className="m-image" variant="top" src={movie.show.image.original} />
        )}
        <Card.Body>
          <Card.Title>{movie.show.name}</Card.Title>
          <Card.Text>
            Language: {movie.show.language}
            <br />
            Genre: {movie.show.genres}
            <br />
            Rating : {movie.show.rating.average}
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Show More
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
