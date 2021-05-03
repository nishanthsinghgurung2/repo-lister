import React from "react";
import styled from "styled-components";
import { Alert, Pagination } from "@material-ui/lab";
import RepoSearch from "../RepoSearch/RepoSearch";
import { CircularProgress } from "@material-ui/core";
import useRepoList from "../../hooks/useRepoList";

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
        validationError,
        data,
        searchTitle,
        repos,
        page,
        onClickSearchForRepoTitles,
        onChangeRepoTitleSearch,
        handlePageChange,
        onClickLoadMoreRepos
    } = useRepoList();


    return (
        <RepoListContainer>
            <RepoListHeader>Github Repo List</RepoListHeader>
            <RepoSearch
                searchTitle = {searchTitle}
                validationError={validationError}
                onChangeRepoTitleSearch = {onChangeRepoTitleSearch}
                onClickSearchForRepoTitles = {onClickSearchForRepoTitles}
            />
            <RepoListBody>
                {error? (
                    <RepoListBodySection>
                        <Alert 
                            data-testid='repo-list-fetch-error'
                            severity="error"
                        >Error fetching repos from api!!!</Alert>
                    </RepoListBodySection>
                ): (
                    <>
                        {loading? (
                            <RepoListBodySection>
                                <CircularProgress />
                            </RepoListBodySection>
                        ): (
                            <>
                                {!data || (data && data.search && (data.search.edges.length === 0) && searchTitle)?(
                                    <Alert
                                        data-testid='repo-list-empty-warning'
                                        severity="warning"
                                    >No github repos found!!!</Alert>
                                ):(
                                    <ul data-testid='repo-list-container'>
                                        {repos && repos[page] && repos[page].map((repo, index) => (
                                            <li data-testid={`repo-${index}`} key={`repo-${index}`}>
                                                <RepoListItemContainer key={repo.url}>
                                                    <a data-testid={`repo-url-${index}`} href={repo.url}>{repo.url}</a>
                                                    <PadLeft10>-</PadLeft10>
                                                    <PadLeft10>🌟</PadLeft10>
                                                    <PadLeft10>
                                                        <div data-testid={`repo-stars-${repo.stargazerCount}`}>{repo.stargazerCount}</div>
                                                    </PadLeft10>
                                                    <PadLeft10>-</PadLeft10>
                                                    <PadLeft10>🍴</PadLeft10>
                                                    <PadLeft10>
                                                        <div data-testid={`repo-forks-${repo.forkCount}`}>{repo.forkCount}</div>
                                                    </PadLeft10>
                                                </RepoListItemContainer>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                            </>
                        )}
                    </>
                )}
                
            </RepoListBody>
            <RepoListFooter hide={repos.length === 0}>
                <RepoListBodySection>
                    <Pagination
                        data-testid='repo-list-pagination'
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
                    <button data-testid='load-more-btn' onClick={onClickLoadMoreRepos} disabled={!!error}>Load more</button>
                </RepoListBodySection>
            </RepoListFooter>
        </RepoListContainer>
    );
};

export default RepoList;