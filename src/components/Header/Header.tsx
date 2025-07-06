import Link from "next/link";
import styles from "./Header.module.scss";
import { Button, ButtonContainer } from "@/components/Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Yomou</Link>
      </div>
      <nav className={styles.nav}>
        <ButtonContainer direction="row">
          <Button href="/register" variant="accent">
            新規会員登録
          </Button>
          <Button href="/login" variant="secondary">
            ログイン
          </Button>
        </ButtonContainer>
      </nav>
    </header>
  );
}
