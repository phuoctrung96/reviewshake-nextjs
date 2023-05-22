import styled, { css } from 'styled-components';
import Text from '@/components/reusable/text/Text';
import { VariantType } from './TextCapValue';

export const StyledText = styled(Text)<{ $variant: VariantType }>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayDarkText};
  font-size: 1.5rem;
  line-height: 1.6;

  strong {
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    font-size: 4.6rem;
    line-height: 1.35;
    margin-right: 0.4783em;
    color: ${({ theme }) => theme.colors.black};
    span {
      font-size: 3.8rem;
      font-weight: 600;
      margin-right: 4px;
    }
  }

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-top: 21px;
      margin-bottom: 21px;
      strong {
        margin-bottom: 6px;
      }

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          line-height: 1.2667;
          strong {
            font-size: 5.4rem;
            line-height: 1;
          }
        `)};

      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          font-size: 1.8rem;
          line-height: 1.5;
          strong {
            margin-bottom: 10px;
            font-size: 6.4rem;
            line-height: 0.84375;
          }
        `)};
    `}
`;
