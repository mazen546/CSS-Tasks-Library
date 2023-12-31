import { Link } from "react-router-dom";
import styles from "./home.module.css";
import "/src/assets/global.css";
import { components } from "../components/componentsData";
const Home = () => {
  const componentsData: {
    name: string;
    route: string;
    element: () => JSX.Element;
    imgSrc: string;
    date: string;
    youtubeLink: string;
  }[] = components;
  return (
    <div className={styles.home}>
      <div className={`container ${styles.container}`}>
        {componentsData.map((ele) => (
          <div className={styles.card}>
            <Link to={ele.route}>
              <img src={ele.imgSrc} alt="" />
              <div className={styles.details}>
                <p>{ele.name}</p>
                <p className={styles.date}>{ele.date}</p>
              </div>
            </Link>
            <a href={ele.youtubeLink}>Watch Video</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
