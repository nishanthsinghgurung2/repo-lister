import styled from 'styled-components';

const RepoListBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RepoListBodySection = styled.section`
    padding-top: 10px;
`;

type RepoSearchProps = {
    searchTitle: string;
    onChangeRepoTitleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickSearchForRepoTitles: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RepoSearch = ({ 
    searchTitle,
    onChangeRepoTitleSearch,
    onClickSearchForRepoTitles
}: RepoSearchProps) => {
    return (
        <RepoListBody>
            <RepoListBodySection>
                <input
                    data-testid='repo-search-text'
                    type='text'
                    placeholder='Search by repo title'
                    defaultValue={searchTitle}
                    onChange={onChangeRepoTitleSearch}
                />
                <button 
                    data-testid='repo-search-btn'
                    id='repo-search-btn'
                    onClick={onClickSearchForRepoTitles}
                >Search</button>
            </RepoListBodySection>
        </RepoListBody>
    );
};

export default RepoSearch;