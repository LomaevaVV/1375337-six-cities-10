import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  availablePlacesAmount: number;
};

function App({availablePlacesAmount}:AppProps): JSX.Element {
  return (
    <MainPage availablePlacesAmount={availablePlacesAmount} />
  );
}

export default App;
