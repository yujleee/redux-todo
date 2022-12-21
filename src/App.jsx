import Container from './components/Container';
import GlobalStyle from './components/GlobalStyle';
import Header from './components/header/Header';
import TodoForm from './components/todoForm/todoForm';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <TodoForm />
        <TodoList isActive={true} />
        <TodoList isActive={false} />
      </Container>
    </>
  );
}

export default App;
