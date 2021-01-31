import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles and Components
import { IconButton, Button } from "@material-ui/core";
import {
  Search,
  ExpandMore,
  ChatBubbleOutlineOutlined,
  NotificationsNoneOutlined,
  Add,
} from "@material-ui/icons";
import Logo from "./Logo";
import UserInfo from "./UserInfo";

import styles from "../../styles/Header.module.css";

function Header() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.location}>
          <div className={`${styles.search} ${styles.locationSearch}`}>
            <Search className={styles.Icons} />
            <input
              type="text"
              value={location}
              className={styles.locationInput}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search city, area or loc..."
            />
            <ExpandMore className={styles.Icons} />
          </div>
        </div>

        <div className={styles.product}>
          <div className={`${styles.search} ${styles.productSearch}`}>
            <input
              type="text"
              className={styles.productInput}
              placeholder="Find Cars, Mobile Phones and more..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className={styles.productBtn}>
            <Search fontSize="large" className={styles.Icons} />
          </button>
        </div>

        <div className={styles.options}>
          <IconButton color="secondary" >
            <ChatBubbleOutlineOutlined fontSize="inherit" />
          </IconButton>
          <IconButton color="secondary">
            <NotificationsNoneOutlined fontSize="inherit"/>
          </IconButton>

          <UserInfo />

          <div className={styles.btn}>
            <Button
              color="primary"
              component={Link}
              to="/postAds"
              variant="contained"
              size="large"
            >
              <Add className={styles.icon} style={{ color: "white" }} />
              <span className={styles.text}>Sell</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
