import { getByTestId } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';

import RepoList from './RepoList';
import { cleanup, findByTestId, findByText, fireEvent, render, waitFor } from '@testing-library/react';
import { ERROR_MOCK_REPOS, MOCK_REPOS, EMPTY_MOCK_REPOS } from '../../utils/testMocks';

const testSetup = (UPDATED_MOCK_REPOS?: any) => {
  const { container } = render(
    <MockedProvider mocks={UPDATED_MOCK_REPOS? UPDATED_MOCK_REPOS: MOCK_REPOS}>
        <RepoList />
    </MockedProvider>
  );

  const searchInputText: HTMLInputElement = getByTestId(container, 'repo-search-text') as HTMLInputElement;
  fireEvent.change(searchInputText, { target: { value: 'tennis'}});
  
  const searchButton: HTMLButtonElement = getByTestId(container, 'repo-search-btn') as HTMLButtonElement;
  fireEvent.click(searchButton);
  return container;
};

describe('RepoList', () => {
    
  afterEach(cleanup)

    it('should show the repo lists when repo title is entered and search button clicked ', async() => {
        
      const container = testSetup();

      const repoUrlElement = await findByTestId(container, 'repo-0');
      expect(repoUrlElement).toBeTruthy();
      
      const repoUrlTextElement = await findByText(repoUrlElement, 'https://github.com/JeffSackmann/tennis_atp');
      expect(repoUrlTextElement).toBeInTheDocument();
      
      const repoStarsElement = await findByText(repoUrlElement, '505');
      expect(repoStarsElement).toBeInTheDocument();

      const repoForksElement = await findByText(repoUrlElement, '391');
      expect(repoForksElement).toBeInTheDocument();
    })
    
    it('should show 10 repos in the current page', async() => {
      const container = testSetup();
      const repoListContainerIUlElement = await findByTestId(container, 'repo-list-container');

      expect(repoListContainerIUlElement.children.length).toBe(10);
    })

    it('should show error message when api fails to fetch response', async() => {
      const container = testSetup(ERROR_MOCK_REPOS);
      const repoListErrorElement = await findByTestId(container, 'repo-list-fetch-error');

      expect(repoListErrorElement).toBeInTheDocument();
    })

    it('should show warning message when api fetches empty response', async() => {
      const container = testSetup(EMPTY_MOCK_REPOS);
      const repoListEmptyWarningElement = await findByTestId(container, 'repo-list-empty-warning');

      expect(repoListEmptyWarningElement).toBeInTheDocument();
    })

    describe('Pagination', () => {
      it('should have pagination', async() => {
        const container = testSetup();
        const repoListPaginationElement = await findByTestId(container, 'repo-list-pagination');
        expect(repoListPaginationElement).toBeInTheDocument();
      })

      it('should load page 2 repos when clicked on that pagination button', async() => {
        const container = testSetup();
        
        const paginationElement = await findByTestId(container, 'repo-list-pagination');
        const paginationPage2Button: HTMLButtonElement = paginationElement.querySelector('[aria-label="Go to page 2"]') as HTMLButtonElement;
        fireEvent.click(paginationPage2Button);
        
        const repoUrlElement = await findByTestId(container, 'repo-0');
        expect(repoUrlElement).toBeTruthy();
      

        const repoUrlTextElement = await findByText(repoUrlElement, 'https://github.com/JeffSackmann/tennis_slam_pointbypoint');
        expect(repoUrlTextElement).toBeInTheDocument();
        
        const repoStarsElement = await findByText(repoUrlElement, '62');
        expect(repoStarsElement).toBeInTheDocument();

        const repoForksElement = await findByText(repoUrlElement, '45');
        expect(repoForksElement).toBeInTheDocument();
      })

      it('should load next page repos when clicked on that pagination button', async() => {
        const container = testSetup();
        
        const paginationElement = await findByTestId(container, 'repo-list-pagination');

        const paginationNextPageButton: HTMLButtonElement = paginationElement.querySelector('[aria-label="Go to next page"]') as HTMLButtonElement;
        fireEvent.click(paginationNextPageButton); // same as clicking page 2
        
        const repoUrlElement = await findByTestId(container, 'repo-0');
        expect(repoUrlElement).toBeTruthy();
      

        const repoUrlTextElement = await findByText(repoUrlElement, 'https://github.com/JeffSackmann/tennis_slam_pointbypoint');
        expect(repoUrlTextElement).toBeInTheDocument();
        
        const repoStarsElement = await findByText(repoUrlElement, '62');
        expect(repoStarsElement).toBeInTheDocument();

        const repoForksElement = await findByText(repoUrlElement, '45');
        expect(repoForksElement).toBeInTheDocument();
      })

      it('should load previous page repos when clicked on that pagination button', async() => {
        const container = testSetup();
        
        const paginationElement = await findByTestId(container, 'repo-list-pagination');

        const paginationNextPageButton: HTMLButtonElement = paginationElement.querySelector('[aria-label="Go to next page"]') as HTMLButtonElement;
        fireEvent.click(paginationNextPageButton); // same as clicking page 2

        const paginationPrevPageButton: HTMLButtonElement = paginationElement.querySelector('[aria-label="Go to previous page"]') as HTMLButtonElement;
        fireEvent.click(paginationPrevPageButton); // same as clicking page 1
        
        const repoUrlElement = await findByTestId(container, 'repo-0');
        expect(repoUrlElement).toBeTruthy();
      

        const repoUrlTextElement = await findByText(repoUrlElement, 'https://github.com/JeffSackmann/tennis_atp');
        expect(repoUrlTextElement).toBeInTheDocument();
        
        const repoStarsElement = await findByText(repoUrlElement, '505');
        expect(repoStarsElement).toBeInTheDocument();
  
        const repoForksElement = await findByText(repoUrlElement, '391');
        expect(repoForksElement).toBeInTheDocument();
      })
    })
})