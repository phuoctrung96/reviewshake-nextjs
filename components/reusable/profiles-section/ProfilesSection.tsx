import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Height } from 'react-animate-height';
import {
  ProfilesSummaryType,
  ProfileType,
  ProfileServices,
  SingleProfileType,
} from '@/types/profiles';
import {
  StyledProfileDropdownHeader,
  StyledTopProfilesWr,
  StyledMoreSitesP,
  StyledProfileDropdownWr,
  StyledSeeProfileBtn,
  StyledProfileArrowRightIcon,
  StyledAnimateHeight,
  StyledProfileDropdownRefDiv,
  StyledProfileDropdownFooter,
  StyledMapPinIcon,
  StyledProfileDropdownHeaderTitle,
  StyledProfileLinkWr,
  StyledUrlProfileIcon,
  StyledProfileIcon,
  StyledNoIconSpan
} from './profilesSection.styles';
import ProfileWithIcon from '../profile-with-icon/ProfileWithIcon';
import AlertIcon from '../icons/AlertIcon';
import NewTabIcon from '../icons/NewTab';
import { shortenNumber } from '@/utils/formatNumber';

type ProfilesSectionType = {
  companyName?: string;
  perSourceSummary?: ProfilesSummaryType;
  profiles: ProfileType[];
};

const ProfilesSection = ({ companyName, perSourceSummary, profiles }: ProfilesSectionType) => {
  const router = useRouter();
  const [height, setHeight] = useState<Height>(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (
        !dropdownRef.current ||
        !dropdownTriggerRef.current ||
        dropdownRef.current.contains(event.target) ||
        dropdownTriggerRef.current.contains(event.target)
      ) {
        return;
      }

      setHeight(0);
    };

    document.addEventListener('mouseup', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mouseup', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [dropdownRef]);

  let perSourceSummaryArray = [];

  if (!perSourceSummary) return null;

  for (const [key, value] of Object.entries(perSourceSummary.per_source)) {
    perSourceSummaryArray.push({ review_site: value.source, total: value.profiles });
  }

  const topProfiles = perSourceSummaryArray.slice(0, 6);

  let profilesByLocation = new Map<ProfileServices | string, SingleProfileType[]>([]);

  const getProfilesByLocation = () => {
    for (const profile of profiles) {
      if (profile.type !== 'location') continue;

      if (typeof profile.location === 'undefined') continue;

      profilesByLocation.set(profile.location.address, profile.profiles);
    }
  };
  getProfilesByLocation();

  let profilesByService = new Map<ProfileServices, SingleProfileType[]>([]);

  const getProfilesByService = () => {
    for (const profile of profiles) {
      if (profile.type === 'location') continue;

      profile.profiles.map((singleProfile) => {
        const existingProfiles =
          profilesByService.get(singleProfile.source as ProfileServices) || [];

        profilesByService.set(singleProfile.source as ProfileServices, [
          ...existingProfiles,
          singleProfile,
        ]);
      });
    }
  };
  getProfilesByService();

  const locationProfilesCount = perSourceSummary.per_type.filter(
    (item) => item.type === 'location'
  )[0]?.profiles;

  const renderProfiles = () => {
    let dropdownSections = [];
    let countOfProfiles = 0;

    for (const [key, value] of profilesByLocation) {
      if (countOfProfiles > 9) break;
      if (value.length === 0) continue;

      dropdownSections.push(
        <div key={key}>
          <StyledProfileDropdownHeader>
            <StyledMapPinIcon />
            <StyledProfileDropdownHeaderTitle>
              {key}{' '}
              <span>
                {value.length} {value.length === 1 ? 'Profile' : 'Profiles'}
              </span>
            </StyledProfileDropdownHeaderTitle>
          </StyledProfileDropdownHeader>
          {value.map((item, index) => {
            if (countOfProfiles > 9) return;

            countOfProfiles++;
            return (
              <StyledProfileLinkWr key={index}>
                <Link href={item.url || ''} passHref target="_blank" rel="noopener noreferrer">
                  <StyledUrlProfileIcon name={item.source} />
                  <span>{item.url}</span>
                  <NewTabIcon />
                </Link>
              </StyledProfileLinkWr>
            );
          })}
        </div>
      );
    }

    for (const [key, value] of profilesByService) {
      if (countOfProfiles > 9) break;
      dropdownSections.push(
        <div key={key}>
          <StyledProfileDropdownHeader>
            <StyledProfileIcon name={key} />
            <StyledProfileDropdownHeaderTitle>
              {key}{' '}
              <span>
                {value.length} {value.length === 1 ? 'Profile' : 'Profiles'}
              </span>
            </StyledProfileDropdownHeaderTitle>
          </StyledProfileDropdownHeader>
          {value.map((item, index) => {
            if (countOfProfiles > 9) return;
            countOfProfiles++;
            return (
              <StyledProfileLinkWr key={index}>
                <Link href={item.url || ''} passHref target="_blank" rel="noopener noreferrer">
                  <StyledNoIconSpan>{item.url}</StyledNoIconSpan>
                  <NewTabIcon />
                </Link>
              </StyledProfileLinkWr>
            );
          })}
        </div>
      );
    }

    return dropdownSections;
  };

  return (
    <div>
      <StyledTopProfilesWr>
        {topProfiles.map(({ review_site, total }, index) => (
          <ProfileWithIcon
            key={index}
            title={review_site as ProfileServices}
            countOfProfiles={total}
          />
        ))}
      </StyledTopProfilesWr>
      <div>
        {perSourceSummaryArray.length > 6 && (
          <StyledMoreSitesP>and {perSourceSummaryArray.length - 6} more sites...</StyledMoreSitesP>
        )}
        <StyledProfileDropdownWr>
          <StyledSeeProfileBtn
            viewType="secondary"
            ref={dropdownTriggerRef}
            onClick={() => {
              setHeight((oldHeight) => {
                return oldHeight === 0 ? 'auto' : 0;
              });
            }}
          >
            See {topProfiles.length === 1 ? 'profile' : 'profiles'} <StyledProfileArrowRightIcon />
          </StyledSeeProfileBtn>
          <StyledAnimateHeight duration={350} height={height}>
            <StyledProfileDropdownRefDiv ref={dropdownRef}>
              {renderProfiles()}
              <StyledProfileDropdownFooter>
                {locationProfilesCount > 10 && (
                  <p>
                    and{' '}
                    <span>{shortenNumber(locationProfilesCount - 10, 1000)} more locations</span>
                  </p>
                )}
                <Link
                  href={`/contact-us?referUrl=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_FETCH_URL?.slice(0, -1) + router.asPath
                  )}&reportCompany=${encodeURIComponent(companyName || '')}`}
                  passHref
                  rel="nofollow"
                >
                  <span>
                    <AlertIcon />{' '}
                  </span>
                  Report an issue
                </Link>
              </StyledProfileDropdownFooter>
            </StyledProfileDropdownRefDiv>
          </StyledAnimateHeight>
        </StyledProfileDropdownWr>
      </div>
    </div>
  );
};

export default ProfilesSection;
