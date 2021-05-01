import React, { useEffect, useState } from 'react';
import { gql, useQuery } from "@apollo/client";

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
    const [repos, setRepos] = useState([] as Array<Node>);
    const [numberOfReposPerPage, setNumberOfReposPerPage] = useState(10);
    const [startCursor, setStartCursor] = useState(null);
    const [endCursor, setEndCursor] = useState(null);

    const { loading, error, data} = useQuery(QUERY_REPO_LIST, {
        variables: {
            "first": numberOfReposPerPage,
            "after": endCursor,
            "query": "react",
            "type": "REPOSITORY"
        }
    });
   
    useEffect(() => {
        if(data && data.search && data.search.edges) {
            let repoInfo: Array<Node> = [];
            data.search.edges.forEach(( { node } : Edge) => {
                repoInfo.push({
                    url: node? node.url: '',
                    forkCount: node? node.forkCount: 0,
                    stargazerCount: node? node.stargazerCount: 0
                });
            });
            setRepos(repoInfo);
        }
    
    }, [data])
    
    if(loading) {
        return <div>Loading...</div>;
    }
    if(error) {
        return <div>Error...</div>;
    }
    return (
        <>
            <header>Github Repo List</header>
            <main>
                {repos && repos.map(repo => (
                    <div key={repo.url}>
                        {repo.url}
                    </div>
                ))}
            </main>
        </>
    );
};

export default RepoList;