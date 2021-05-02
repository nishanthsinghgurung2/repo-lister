import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";
import styled from 'styled-components';
import { Alert, Pagination } from '@material-ui/lab';
import RepoSearch from './RepoSearch';
import { CircularProgress } from '@material-ui/core';
import { PAGE_SIZE, TOTAL_REPO_FETCH_COUNT } from '../utils/constants';

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

type Node = {
    forkCount: number;
    url: string;
    stargazerCount: number;
};

type Edge = {
    node: Node
};

const QUERY_REPO_LIST = gql`
        query($first: Int!, $after: String, $query: String!, $type: SearchType!) {
            search(first: $first, after:$after, query: $query, type: $type) {
                repositoryCount
                edges {
                    node {
                        ... on Repository {
                            url
                            forkCount
                            stargazerCount
                        }
                    }
                }
                pageInfo {
                    startCursor
                    hasNextPage
                    endCursor
                }
            }
        }
    `;

const RepoList: React.FC  = () => {
    const [repos, setRepos] = useState([] as Array<Array<Node>>);
    const [startCursor, setStartCursor] = useState(null);
    const [nextStartCursor, setNextStartCursor] = useState(null);
    const [searchTitle, setSearchTitle] = useState('');
    const [newSearchTitle, setNewSearchTitle] = useState('');
    const [page, setPage] = useState(1);
    const [totalPagesCount, setTotalPagesCount] = useState(0);
    const [totalPagesofFetchedReposCount, setTotalPagesofFetchedReposCount] = useState(0);
    const [pageSize, setPageSize] = useState(PAGE_SIZE);
    
    
    const { loading, error, data} = useQuery(QUERY_REPO_LIST, {
        variables: {
            "first": TOTAL_REPO_FETCH_COUNT,
            "after": startCursor,
            "query": searchTitle,
            "type": "REPOSITORY"
        },
        errorPolicy: 'all'
    });

    const onClickSearchForRepoTitles = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setRepos([]);
        setStartCursor(null);
        setSearchTitle(newSearchTitle);
        setPage(1);
    };
    
    const onChangeRepoTitleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewSearchTitle(e.target.value);
    };

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number)=> {
        setPage(value);
    };

    const onChangePageSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setPageSize(Number(e.target.value));
        setPage(1);
    };
    const onClickLoadMoreRepos = (e:  React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStartCursor(nextStartCursor);
    };
   
    useEffect(() => {
        if(data && data.search && data.search.edges) {
            let repoInfo: Array<Node> = [];
            let updateReposInPage: Array<Array<Node>> = [];
            let updateReposInPageIndex = 0;
            let count = 0 ;
            let updatedRepos = [];

            setTotalPagesCount(TOTAL_REPO_FETCH_COUNT);

            data.search.edges.forEach(( { node } : Edge, index: number) => {
                repoInfo.push({
                    url: node? node.url: '',
                    forkCount: node? node.forkCount: 0,
                    stargazerCount: node? node.stargazerCount: 0
                });
                count++;
                if(count === pageSize) {
                    if(repos.length === 0) {
                        updateReposInPageIndex = Math.ceil(index/pageSize);
                    } else {
                        updateReposInPageIndex = Math.floor(index/pageSize);                        
                    }
                    updateReposInPage[updateReposInPageIndex] = repoInfo;
                    count = 0;
                    repoInfo = [];
                    setNextStartCursor(data.search.pageInfo.endCursor);
                }
            });

            updatedRepos = repos.concat(updateReposInPage);
            setTotalPagesofFetchedReposCount(updatedRepos.length);
            setRepos(updatedRepos);
        }
    // If we add the dependecies mentioned in the eslint suggestion infinite rerenders happens.
    // Hence had to disable the lint rule for this line.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    
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