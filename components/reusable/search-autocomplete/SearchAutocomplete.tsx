import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ClickAwayListener } from '@mui/material';
import useSearchAutocomplete from '@/hooks/useSearchAutocomplete';
import {
  StyledCompanySearchDiv,
  StyledBGLoaderWrDiv,
  StyledSingleCompanyResultLink,
  StyledLoader,
} from './searchAutocomplete.styles';
import Loader from '../loader/Loader';
import ClearbitImage from '../clearbit-image/ClearbitImage';

type SearchAutocompleteType = {
  isOpen: boolean;
  handleClose: () => void;
  excludeSlugs?: string[];
};

const SearchAutocomplete = ({ isOpen, handleClose, excludeSlugs = [] }: SearchAutocompleteType) => {
  const router = useRouter();
  const [companySearchInput, setCompanySearchInput] = useState('');
  const [linkPressed, setLinkPressed] = useState<number | undefined>();

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanySearchInput(event.target.value);
  };

  const { dropdownError, fetched, dropdownLoading, companySuggestions, setFetched } =
    useSearchAutocomplete({
      searchInput: companySearchInput,
      excludeSlugs,
    });

  const handleRouteChange = () => {
    setCompanySearchInput('');
    setFetched(false);
    handleClose();
    setLinkPressed(undefined);
  };

  return isOpen ? (
    <ClickAwayListener onClickAway={handleClose}>
      <StyledCompanySearchDiv>
        <input
          type="text"
          value={companySearchInput}
          onChange={handleChange}
          placeholder="Search for a company"
          autoFocus
        />
        {dropdownError && (
          <>
            <hr />
            <p>{dropdownError}</p>
          </>
        )}
        {dropdownLoading && (
          <StyledBGLoaderWrDiv>
            <Loader type="secondary" />
          </StyledBGLoaderWrDiv>
        )}
        {fetched && companySuggestions.length === 0 && !dropdownError && !dropdownLoading && (
          <div>
            <hr />
            <p>We couldn’t find that company, please contact us to extend our coverage.</p>
          </div>
        )}
        {fetched && companySuggestions.length > 0 && !dropdownError && (
          <div>
            {companySuggestions.map((company, index) => {
              return (
                <div key={index}>
                  <hr />
                  <StyledSingleCompanyResultLink
                    href={`${router.asPath}/vs/${company.tag}`}
                    passHref
                    shallow
                    onClick={() => {
                      setLinkPressed(index);
                    }}
                  >
                    {company.url === null ? (
                      <div style={{ width: '26px' }} />
                    ) : (
                      <ClearbitImage url={company.url || ''} width={26} />
                    )}
                    {company.name}
                    {typeof linkPressed !== 'undefined' && linkPressed === index && (
                      <StyledLoader type="secondary" />
                    )}
                  </StyledSingleCompanyResultLink>
                </div>
              );
            })}
          </div>
        )}
      </StyledCompanySearchDiv>
    </ClickAwayListener>
  ) : null;
};

export default SearchAutocomplete;
