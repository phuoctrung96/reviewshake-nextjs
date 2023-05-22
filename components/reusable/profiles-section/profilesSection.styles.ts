import styled, { css } from 'styled-components';
import BaseButton from '../base-button/BaseButton';
import ArrowRight from '../icons/ArrowRight';
import MapPinIcon from '../icons/MapPin';
import AnimateHeight from 'react-animate-height';
import ProfileIcon from '../profile-icon/ProfileIcon';

export const StyledProfilesSectionWr = styled.div``;

export const StyledTopProfilesWr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 2.1875em;
  margin-bottom: 1.5em;
  > div {
    flex: 1 1 30%;
  }

  ${({ theme }) =>
    theme.mediaQueries('xs')(css`
      > div {
        flex: 1 1 50%;
      }
    `)};
`;

export const StyledProfileDropdownWr = styled.div`
  position: relative;
  margin-left: auto;
`;

export const StyledProfileDropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f6f6f6;
  padding: 19px 22px;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`;

export const StyledProfileDropdownHeaderTitle = styled.p`
  text-transform: capitalize;
  font-size: 1.5rem;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  flex: 1 1 90%;
  margin: 0;
  span {
    display: block;
    font-weight: 400;
    font-size: 1.4rem;
    color: #66717e;
  }
`;

export const StyledMoreSitesP = styled.p`
  font-size: 1.3rem;
  line-height: 1.35;
  margin-bottom: 1.8462em;
  color: #66717e;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      margin-bottom: 0;
    `)};
`;

export const StyledSeeProfileBtn = styled(BaseButton)`
  width: 100%;
  font-size: 1.4rem;
  height: 2.1875em;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: max-content;
      height: 2.5em;
      padding: 0 0.8571em;
      position: absolute;
      right: 16px;
      bottom: 16px;
    `)};
`;

export const StyledProfileArrowRightIcon = styled(ArrowRight)`
  width: 7px;
  transform: rotate(90deg);
`;

export const StyledAnimateHeight = styled(AnimateHeight)`
  margin-top: 10px;
  box-shadow: 14px 14px 155px rgba(0, 0, 9, 0.12);

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      position: absolute;
      max-width: 420px;
      bottom: -10px;
      right: 0;
      transform: translateY(100%);
      z-index: 3;
    `)};
`;

export const StyledProfileDropdownRefDiv = styled.div`
  border-radius: 6px;
  border: 1px solid #dfdfdf;
  overflow: hidden;

  > div {
    &:first-child {
      .dropdownHeader {
        border-top: none;
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      margin-top: 0;
    `)};
`;

export const StyledProfileDropdownFooter = styled.div`
  font-size: 1.4rem;
  background-color: #fff;
  padding: 1.5em;
  font-weight: 600;
  position: relative;
  border-radius: 0 0 6px 6px;
  p {
    color: #66717e;
  }
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
  a {
    display: inline-flex;
    align-items: center;
    font-weight: 400;
    color: #66717e;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.blue};
      path {
        stroke: ${({ theme }) => theme.colors.blue};
      }
    }
    span {
      width: 33px;
      height: 33px;
      display: inline-flex;
      background-color: #eeeff0;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-right: 12px;
    }
  }
  &:after {
    content: '';
    display: block;
    width: calc(100% - 44px);
    height: 1px;
    background-color: #dfdfdf;
    position: absolute;
    top: 0;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0;
      }
    `)};
`;

export const StyledMapPinIcon = styled(MapPinIcon)`
  margin-right: 0.5em;
  width: 13px;
  margin-top: 2px;
`;

export const StyledProfileLinkWr = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  padding: 0.90625em 1.375em;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 17px;
    height: 100%;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 1) 100%);
  }
  &:after {
    content: '';
    display: block;
    width: calc(100% - 44px);
    height: 1px;
    background-color: #dfdfdf;
    position: absolute;
    bottom: 0;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  a {
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    line-height: 1.35;
    color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    span {
      width: 82%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    svg {
      width: 14px;
      margin-left: auto;
      fill: ${({ theme }) => theme.colors.blue};
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      background-color: #fff;
    `)};
`;

export const StyledUrlProfileIcon = styled(ProfileIcon)`
  width: 19px;
  height: 19px;
  margin-right: 0.5em;
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  width: 22px;
  height: 22px;
  margin-right: 0.5em;
`;

export const StyledNoIconSpan = styled.span`
  width: 92%;
`;
