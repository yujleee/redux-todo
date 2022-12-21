import Container from './components/Container';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
