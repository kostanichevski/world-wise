import styles from "./Sidebar.module.css";

function Footer() {
  return (
    <div className={styles.sidebar}>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
