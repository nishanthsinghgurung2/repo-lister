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
    onChangePageSize: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    pageSize: number;
};

const RepoSearch = ({ 
    searchTitle,
    onChangeRepoTitleSearch,
    onClickSearchForRepoTitles,
    onChangePageSize,
    pageSize
}: RepoSearchProps) => {
    return (
        <RepoListBody>
            <RepoListBodySection>
                <input
                    type='text'
                    className='repo-list-form-control'
                    placeholder='Search by repo title'
                    defaultValue={searchTitle}
                    onChange={onChangeRepoTitleSearch}
                />
                <button onClick={onClickSearchForRepoTitles}>Search</button>
            </RepoListBodySection>
        </RepoListBody>
    );
};

export default RepoSearch;