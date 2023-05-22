import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CloseIcon from '@/components/reusable/icons/CloseIcon';
import PlusIcon from '@/components/reusable/icons/PlusIcon';
import {
  StyledComparisonWrDiv,
  StyledComparisonContainer,
  StyledSingleCompanyDiv,
  StyledClearbitImage,
  StyledLink,
  StyledVSDiv,
  StyledCompanySearchWrDiv,
  StyledAddToCompareTriggerBtn,
} from './comparisonDropdown.styles';
import SearchAutocomplete from '../search-autocomplete/SearchAutocomplete';
import useCompanies from '@/providers/CompaniesProvider';

const ComparisonDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { companyNames, summariesData, companySlugs } = useCompanies();

  const companyUrls = summariesData.map((item) => item.organization.website || '');

  const handleDropdownOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const getUrlWithoutCurrentSlug = (companySlugToRemove: string): string => {
    if (!Array.isArray(router.query.slug)) return router.query.slug || '';
    const filtered = router.query.slug?.filter(
      (slug) => slug !== 'vs' && slug !== companySlugToRemove
    );

    return '/' + filtered.join('/vs/');
  };

  return (
    <StyledComparisonWrDiv>
      <StyledComparisonContainer>
        {companyNames.map((companyName, index) => {
          const companyUrlWithoutCurrentSlug = getUrlWithoutCurrentSlug(companySlugs[index]);

          return (
            <StyledSingleCompanyDiv key={index}>
              <StyledClearbitImage url={companyUrls[index]} width={26} disablePlaceholder />
              <p>{companyName}</p>
              {companyNames.length > 1 && (
                <StyledLink href={`/reviews${companyUrlWithoutCurrentSlug}`} passHref>
                  <CloseIcon />
                </StyledLink>
              )}
              {index <= 1 && <StyledVSDiv>VS.</StyledVSDiv>}
            </StyledSingleCompanyDiv>
          );
        })}
        {companyNames.length < 3 && (
          <StyledCompanySearchWrDiv>
            <StyledAddToCompareTriggerBtn onClick={handleDropdownOpen}>
              <PlusIcon />
              Add to compare
            </StyledAddToCompareTriggerBtn>
            <SearchAutocomplete
              isOpen={isOpen}
              handleClose={() => setIsOpen(false)}
              excludeSlugs={companySlugs}
            />
          </StyledCompanySearchWrDiv>
        )}
      </StyledComparisonContainer>
    </StyledComparisonWrDiv>
  );
};

export default ComparisonDropdown;
