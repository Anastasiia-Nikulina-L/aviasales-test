import styles from "./Header.module.css";
import planeLogo from "./planeLogo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={planeLogo} alt="Plane logo" />
    </div>
  );
};
