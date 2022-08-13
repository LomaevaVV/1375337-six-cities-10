import MoonLoader from 'react-spinners/MoonLoader';
import styles from './loading-screen.module.css';

export default function LoadingScreen(): JSX.Element {
  return (
    <MoonLoader
      className={styles.page_loader}
      color="#3fdc62"
      size={130}
      speedMultiplier={0.3}
    />

  );
}
