import BaseLink from '@/components/reusable/base-link/BaseLink';
import {
  analyzeReviewsData,
  comparePlansData,
  generateReviewsData,
  manageReviewsData,
  marketReviewsData,
} from '@/components/route/pricing/pricingData';
import {
  SeparatorTh,
  StyledCtaTh,
  StyledShortTitleTh,
  StyledTable,
} from './comparePlansTable.styles';
import ComparePlansTableSection from './ComparePlansTableSection';

const ComparePlansTable = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <SeparatorTh />
          {comparePlansData.map(({ id, shortTitle }) => (
            <StyledShortTitleTh key={id}>{shortTitle}</StyledShortTitleTh>
          ))}
        </tr>
        <tr>
          <SeparatorTh />
          {comparePlansData.map(({ id, tryFreeLink }) => (
            <StyledCtaTh key={id}>
              <BaseLink href={tryFreeLink} external fontSize={{ _: '1.5rem', md: '1.6rem' }} px={0}>
                Try free
              </BaseLink>
            </StyledCtaTh>
          ))}
        </tr>
      </thead>
      <tbody>
        <ComparePlansTableSection title="Manage reviews" rows={manageReviewsData} />
        <ComparePlansTableSection title="Generate reviews" rows={generateReviewsData} />
        <ComparePlansTableSection title="Market reviews" rows={marketReviewsData} />
        <ComparePlansTableSection title="Analyze reviews" rows={analyzeReviewsData} />
      </tbody>
    </StyledTable>
  );
};
export default ComparePlansTable;
