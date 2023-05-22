import React from 'react';
import { SingleProfilesSectionType } from '@/types/profiles';
import { StyledProfileWithIconWr } from './profileWithIcon.styles';
import { shortenNumber } from '@/utils/formatNumber';
import ProfileIcon from '../profile-icon/ProfileIcon';

const ProfileWithIcon = ({ title, countOfProfiles }: SingleProfilesSectionType) => {
  return (
    <StyledProfileWithIconWr>
      <ProfileIcon name={title} />
      <h3>{title}</h3>
      <p>
        {shortenNumber(countOfProfiles, 1000)} {countOfProfiles === 1 ? 'Profile' : 'Profiles'}
      </p>
    </StyledProfileWithIconWr>
  );
};

export default ProfileWithIcon;
