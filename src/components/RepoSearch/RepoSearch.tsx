import React from "react";
import styled from "styled-components";

const RepoListBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const RepoListBodySection = styled.section`
    padding-top: 10px;
`;

const ValidationError = styled.div`
    color: red;
    text-align: center;
    padding-top: 10px;
`;

type RepoSearchProps = {
    searchTitle: string;
    validationError: boolean;
    onChangeRepoTitleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickSearchForRepoTitles: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RepoSearch= ({
    searchTitle,
    validationError,
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
                    required
                    onChange={onChangeRepoTitleSearch}
                />
                <button 
                    data-testid='repo-search-btn'
                    id='repo-search-btn'
                    onClick={onClickSearchForRepoTitles}
                >Search</button>
                {validationError? <ValidationError data-testid='repo-search-validation-error'>Invalid search title</ValidationError>: null}
            </RepoListBodySection>
        </RepoListBody>
    );
};

export default RepoSearch;