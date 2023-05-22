import React from 'react';
import Image from 'next/image';
import { ProfileServices } from '@/types/profiles';
import { StyledProfileIconWr } from './profileIcon.styles';

const PNG_ICONS = [
  'cargurus',
  'creditkarma',
  'dealerrater',
  'flipkart',
  'manta',
  'netflix',
  'openrice',
  'opentable',
  'reserveout',
  'softwareadvice',
  'trustedshops',
  'trustradius',
  'vitals',
  'weddingwire',
  'yellowpages',
  'greatschools',
  'findlaw',
  'aptratings',
  'itcentralstation',
  'productreview',
  'bilbayt',
];

type ProfileIconType = {
  name?: ProfileServices;
  className?: string;
};

const ProfileIcon = ({ name, className = '' }: ProfileIconType) => {
  const lowerCaseName = name?.toLowerCase();
  return lowerCaseName ? (
    <StyledProfileIconWr className={`${className}`}>
      <Image
        src={`/assets/images/services/${lowerCaseName}.${
          PNG_ICONS.includes(lowerCaseName) ? 'png' : 'svg'
        }`}
        width={50}
        height={50}
        alt=""
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.setAttribute('style', 'display: none');
        }}
      />
    </StyledProfileIconWr>
  ) : null;
};

export default ProfileIcon;
