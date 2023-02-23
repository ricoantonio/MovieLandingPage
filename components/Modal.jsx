import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "../styles/Modal.module.css";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";

function ModalBox({ show, handleClose, movie }) {
  const [movieFocus, setMovieFocus] = useState({});

  useEffect(() => {
    console.log(movie);
    if (movie && movie.title) {
      setMovieFocus(movie);
    }
  }, [movie]);

  return (
    <Modal show={show} onHide={handleClose} dialogClassName={styles.my_modal}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
          <ReactPlayer
            width={"100%"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <img
            style={{
              minWidth: "150px",
              height: "225px",
              objectFit: "cover",
              border: "1px solid black",
            }}
            alt={movieFocus.title}
            src={movieFocus.posterUrl}
          />
          <div style={{ padding: "15px" }}>
            <div style={{ fontWeight: "700" }}>
              {movieFocus.title} - {movieFocus.year}
            </div>
            <div>
              {movieFocus && movieFocus.genres
                ? movieFocus.genres.map((val) => {
                    return <span>{val} </span>;
                  })
                : ""}
            </div>
            <div>{movieFocus.plot}</div>
            <div>Actors: {movieFocus.actors}</div>
            <div>Director: {movieFocus.director}</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalBox;
