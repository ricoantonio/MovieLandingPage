import Link from "next/link";
import styles from "../styles/TopNav.module.css";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";

const TopNav = ({ searchURL }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(searchURL);
    if (searchURL) {
      setSearch(searchURL);
    }
  }, [searchURL]);

  return (
    <>
      <div className={styles.nav_container}>
        <div className={styles.home_text}>
          <div>
            <Link
              href={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "900",
              }}
            >
              HOME
            </Link>
          </div>
        </div>
        <input
          className={styles.search_input_box}
          type="text"
          placeholder="Search..."
          value={search ? search : ""}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search) {
              router.push(`/search/${search}`);
            }
          }}
        />
      </div>
    </>
  );
};

export default TopNav;
