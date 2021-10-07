import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import Container from "@components/Container";

import styles from "./Header.module.scss";
import { useSnipcart } from "use-snipcart";

const Header = () => {
  const { cart = {} } = useSnipcart();
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            <a>Hyper Bros. Trading Cards</a>
          </Link>
        </p>
        <p className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>${cart.subtotal}</span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
