import Container from './components/Container';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/header/Header';
import TodoForm from './components/todoForm/todoForm';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <TodoForm />
      </Container>
    </>
  );
}

export default App;
