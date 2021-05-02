import React from 'react';
import styled from 'styled-components';
import { Alert, Pagination } from '@material-ui/lab';
import RepoSearch from './RepoSearch';
import { CircularProgress } from '@material-ui/core';
import useRepoList from './useRepoList';
import { Node } from "../utils/types";

const RepoListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RepoListBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 300px;
`;

const RepoListHeader = styled.header`
    font-size: 20px;
`;

const RepoListFooter = styled.footer<{hide: boolean}>`
    display: ${(props) => (props.hide? "none": "flex")};
    flex-direction: column;
    align-items: center;
`;

const RepoListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const RepoListBodySection = styled.section`
    padding-top: 10px;
`;

const PadLeft10 = styled.span`
    padding-left: 10px
`;

const RepoList: React.FC  = () => {
    const {
        loading,
        error,
        data,
        searchTitle,
        pageSize,
        repos,
        page,
        onClickSearchForRepoTitles,
        onChangeRepoTitleSearch,
        handlePageChange,
        onChangePageSize,
        onClickLoadMoreRepos
    } = useRepoList();
    
    return (
        <RepoListContainer>
            <RepoListHeader>Github Repo List</RepoListHeader>
            <RepoSearch 
                searchTitle = {searchTitle}
                onChangeRepoTitleSearch = {onChangeRepoTitleSearch}
                onClickSearchForRepoTitles = {onClickSearchForRepoTitles}
                onChangePageSize = {onChangePageSize}
                pageSize = {pageSize}
            />
            <RepoListBody>
                {error? (
                    <RepoListBodySection>
                        <Alert severity="error">Error fetching repos from api!!!</Alert>
                    </RepoListBodySection>
                ): null }
                {loading? (
                    <RepoListBodySection>
                        <CircularProgress />
                    </RepoListBodySection>
                ): (
                    <>
                        {data && data.search && (data.search.edges.length === 0) && searchTitle?(
                            <Alert severity="warning">No github repos found!!!</Alert>
                        ):(
                            <ul>
                                {repos && repos[page] && repos[page].map((repo) => (
                                    <li key={repo.url}>
                                        <RepoListItemContainer key={repo.url}>
                                            <a href={repo.url}>{repo.url}</a>
                                            <PadLeft10>-</PadLeft10>
                                            <PadLeft10>🌟</PadLeft10>
                                            <PadLeft10>
                                                <div>{repo.stargazerCount}</div>
                                            </PadLeft10>
                                            <PadLeft10>-</PadLeft10>
                                            <PadLeft10>🍴</PadLeft10>
                                            <PadLeft10>
                                                <div>{repo.forkCount}</div>
                                            </PadLeft10>
                                        </RepoListItemContainer>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                    </>
                )}
            </RepoListBody>
            <RepoListFooter hide={repos.length === 0}>
                <RepoListBodySection>
                    <Pagination
                        count={repos.length - 1}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant='outlined'
                        shape='rounded'
                        onChange={handlePageChange}
                    />
                </RepoListBodySection>
                <RepoListBodySection>
                    <button onClick={onClickLoadMoreRepos} disabled={!!error}>Load more</button>
                </RepoListBodySection>
            </RepoListFooter>
        </RepoListContainer>
    );
};

export default RepoList;