import Image from 'next/image';
import { StyledContainer } from './errorPage.styles';

const ErrorPage = () => {
  return (
    <>
      <StyledContainer pt={150}>
        <div>
          <Image src="/assets/images/404.png" width={902} height={570} alt="404" />
        </div>
        <h1>Page Not Found</h1>
      </StyledContainer>
    </>
  );
};

export default ErrorPage;
