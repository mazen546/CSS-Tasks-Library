import styles from "./style.module.css";
function CardOne() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBx}></div>
        <div className={styles.content}>
          <span className={styles.price}>
            <a href="#">$1,000,000</a>
          </span>
          <ul>
            <li>SomeWhere</li>
            <li>1200sqm</li>
            <li>House</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
