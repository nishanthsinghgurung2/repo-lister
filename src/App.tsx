import RepoList from './RepoList/RepolList';
import styled from 'styled-components';

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
