import { Fragment } from 'react';
import { PricingOptionType } from '@/components/route/pricing/pricingData';
import {
  RowTitleTr,
  StyledSectionTableHeading,
  StyledTableValueRow,
  StyledTh,
} from './comparePlansTable.styles';
import FeatureCheck from '@/components/reusable/icons/FeatureCheck';
import Text from '@/components/reusable/text/Text';

type ComparePlansTableSectionProps = {
  title: string;
  rows: PricingOptionType;
};

const ComparePlansTableSection = ({ title, rows }: ComparePlansTableSectionProps) => {
  return (
    <Fragment key={title}>
      <tr>
        <StyledTh colSpan={3} $displayOn="mobile">
          {title}
        </StyledTh>
        <StyledTh colSpan={4} $displayOn="tablet-up">
          {title}
        </StyledTh>
      </tr>
      {Object.entries(rows).map((item, _index) => {
        return (
          <Fragment key={_index}>
            <RowTitleTr>
              <StyledSectionTableHeading colSpan={3}>{item[0]}</StyledSectionTableHeading>
            </RowTitleTr>
            <tr>
              <StyledTableValueRow
                $displayOn="tablet-up"
                {...(_index === Object.entries(rows).length - 1 && { $sectionLastRow: true })}
                {...(_index === 0 && { $sectionFirstRow: true })}
              >
                {item[0]}
              </StyledTableValueRow>
              {item[1].map((value, index) => (
                <StyledTableValueRow
                  key={index}
                  {...(_index === 0 && { $sectionFirstRow: true })}
                  {...(_index === Object.entries(rows).length - 1 && { $sectionLastRow: true })}
                  {...(typeof value === 'string' &&
                    value.startsWith('$') && { $fontSize: '2.4rem' })}
                >
                  {typeof value === 'boolean' ? (
                    value ? (
                      <FeatureCheck />
                    ) : (
                      <Text color="#CCCCCE" m={0}>
                        --
                      </Text>
                    )
                  ) : (
                    value
                  )}
                </StyledTableValueRow>
              ))}
            </tr>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default ComparePlansTableSection;
