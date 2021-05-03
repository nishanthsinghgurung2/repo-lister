import styled from 'styled-components';
import RepoList from './components/RepoList/RepoList';

const MainApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <MainApp>
      <RepoList />
    </MainApp>
  );
}

export default App;
