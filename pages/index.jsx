import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import TopNav from "../components/TopNav";
import Modal from "../components/Modal";
import Film from "../film.json";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import cb from "../public/cb.jpg";
import apocalypto from "../public/apocalypto.jpg";
import bs from "../public/bs.jpg";
import rat from "../public/rat.jpg";
import tcc from "../public/tcc.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [film, setFilm] = useState(Film);
  const [show, setShow] = useState(false);
  const [movieFocus, setMovieFocus] = useState({});

  var movieHeader = [
    {
      id: 6,
      title: "Ratatouille",
      year: "2007",
      runtime: "111",
      genres: ["Animation", "Comedy", "Family"],
      director: "Brad Bird, Jan Pinkava",
      actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
      plot: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
      wall: rat,
    },
    {
      id: 2,
      title: "The Cotton Club",
      year: "1984",
      runtime: "127",
      genres: ["Crime", "Drama", "Music"],
      director: "Francis Ford Coppola",
      actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
      plot: "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
      wall: tcc,
    },
    {
      id: 11,
      title: "Apocalypto",
      year: "2006",
      runtime: "139",
      genres: ["Action", "Adventure", "Drama"],
      director: "Mel Gibson",
      actors:
        "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
      plot: "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg",
      wall: apocalypto,
    },
    {
      id: 16,
      title: "Corpse Bride",
      year: "2005",
      runtime: "77",
      genres: ["Animation", "Drama", "Family"],
      director: "Tim Burton, Mike Johnson",
      actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
      plot: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
      posterUrl:
        "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
      wall: cb,
    },
    {
      id: 21,
      title: "Black Swan",
      year: "2010",
      runtime: "108",
      genres: ["Drama", "Thriller"],
      director: "Darren Aronofsky",
      actors: "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
      plot: 'A committed dancer wins the lead role in a production of Tchaikovsky\'s "Swan Lake" only to find herself struggling to maintain her sanity.',
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg",
      wall: bs,
    },
  ];

  const renderGenre = (genre) => {
    var searchTitle = film.movies.filter((val) => {
      return val.genres.includes(genre);
    });
    return searchTitle.map((val) => {
      return (
        <div
          className={styles.container_film}
          onClick={() => {
            setShow(!show);
            setMovieFocus(val);
            console.log(val);
          }}
        >
          <img
            style={{ width: "300px", height: "450px", objectFit: "cover" }}
            alt={val.title}
            src={val.posterUrl}
          />
          <div className={styles.container_desc_film}>
            <div style={{ fontWeight: "700" }}>
              {val.title} - {val.year}
            </div>
            <div>{val.plot}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <TopNav />
      <Modal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
        movie={movieFocus}
      />
      <div style={{ padding: "65px 10px 0" }}>
        <div style={{ width: "100%", height: "500px", display: "grid" }}>
          <Carousel controls={false}>
            {movieHeader.map((val) => {
              console.log(val.wall);
              return (
                <Carousel.Item>
                  <div
                    onClick={() => {
                      setShow(!show);
                      setMovieFocus(val);
                      console.log(val);
                    }}
                    style={{ width: "100%", height: "500px" }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                      }}
                      src={val.wall.src}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: "0",
                        bottom: "0",
                        padding: "70px",
                        color: "white",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        minWidth: "100%",
                      }}
                    >
                      <div style={{ fontWeight: "700", fontSize: "20px" }}>
                        {val.title}
                      </div>
                      <div>{val.plot}</div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        {film.genres.map((val) => {
          return (
            <>
              <h3 style={{ marginTop: "20px", fontWeight: "900" }}>{val}</h3>
              <div className={styles.container_list_film}>
                {renderGenre(val)}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
