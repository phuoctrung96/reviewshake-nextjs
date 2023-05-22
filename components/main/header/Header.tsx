import { useState } from 'react';
import Container from '@/components/reusable/container/Container';
import Logo from '@/components/reusable/logo/Logo';
import { StyledButton, StyledHeader } from './header.styles';
import Navigation from '../navigation/Navigation';
import RightNavigation from '../right-navigation/RightNavigation';
import MenuIcon from '@/components/reusable/icons/MenuIcon';

type HeaderProps = {
  isCompanyReviewsPage: boolean;
};

const Header = ({ isCompanyReviewsPage }: HeaderProps) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const handleOpen = () => {
    setIsNavigationOpen(true);
  };

  const handleClose = () => {
    setIsNavigationOpen(false);
  };

  return (
    <StyledHeader $companyReviewsPage={isCompanyReviewsPage}>
      <Container isFlex justifyContent="flex-start">
        <Logo />
        <StyledButton aria-label="Open navigation menu" onClick={handleOpen} viewType="transparent">
          <MenuIcon />
        </StyledButton>
        <Navigation isOpened={isNavigationOpen} handleMenuClose={handleClose} />
        <RightNavigation />
      </Container>
    </StyledHeader>
  );
};

export default Header;
