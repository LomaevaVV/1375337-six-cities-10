import MainPage from '../../pages/main-page/main-page';

type Props = {
  countOfAvailablePlaces: number;
};

function App({countOfAvailablePlaces}:Props): JSX.Element {
  return (
    <MainPage countOfAvailablePlaces = {countOfAvailablePlaces}/>
  );
}

export default App;
