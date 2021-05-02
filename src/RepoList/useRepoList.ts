import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { PAGE_SIZE, TOTAL_REPO_FETCH_COUNT } from "../utils/constants";
import { QUERY_REPO_LIST } from "../utils/gqlquery";
import { Edge, Node } from "../utils/types";

const useRepoList = () => {
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
    }, [data]);

    return {
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
    };
};

export default useRepoList;