import IonIcon from "@reacticons/ionicons";
import styles from "./style.module.css";
import { useState } from "react";
function NavBarOne() {
  const [icons, setIcons] = useState([
    { name: "home-outline", isActive: true },
    { name: "person-outline", isActive: false },
    { name: "chatbubble-outline", isActive: false },
    { name: "camera-outline", isActive: false },
    { name: "settings-outline", isActive: false },
  ]);
  const NavList = icons.map((icon, i) => (
    <li
      key={i}
      className={`${styles.list}${icon.isActive ? ` ${styles.active}` : ""}`}
      onClick={() => activeLink(i)}
    >
      <a href="#">
        <span className={styles.icon}>
          <IonIcon name={icon.name} />
        </span>
      </a>
    </li>
  ));
  const activeLink = (indx: number) => {
    setIcons((prevIcons) =>
      prevIcons.map((icon, i) => {
        if (indx === i) {
          icon.isActive = true;
        } else {
          icon.isActive = false;
        }
        return icon;
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <ul>
          {NavList}
          <div className={`${styles.indicator}`}>
            <span></span>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBarOne;
