import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import TopNav from "../../../components/TopNav";
import Modal from "../../../components/Modal";
import styles from "../../../styles/Search.module.css";
import Router, { useRouter } from "next/router";
import Film from "../../../film.json";
import holder from "../../../public/poster-holder.jpg";

import React, { useState, useEffect, useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function search() {
  const [title, setTitle] = useState("");
  const [film, setFilm] = useState(Film);
  const [show, setShow] = useState(false);
  const [movieFocus, setMovieFocus] = useState({});

  const router = useRouter();

  useEffect(() => {
    if (router.query.title) {
      setTitle(router.query.title);
    } else {
      router.push("/");
    }
  }, [router.query.title]);

  const renderSearch = () => {
    var searchTitle = film.movies.filter((val) => {
      return val.title.toLowerCase().includes(title.toLowerCase());
    });
    return searchTitle.map((val) => {
      return (
        <div
          className={styles.container_film}
          onClick={() => {
            setShow(!show);
            setMovieFocus(val);
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
      <Modal
        show={show}
        handleClose={() => {
          setShow(false);
        }}
        movie={movieFocus}
      />
      <TopNav searchURL={title} />
      <div style={{ padding: "65px 10px 0" }}>
        <h2>Search: {title}</h2>
        <div className={styles.container_list_film}>{renderSearch()}</div>
      </div>
    </>
  );
}
