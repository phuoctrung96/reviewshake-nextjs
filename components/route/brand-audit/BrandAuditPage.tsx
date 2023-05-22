import Script from 'next/script';
import Container from '@/components/reusable/container/Container';

const BrandAuditPage = () => {
  return (
    <Container p={{ _: '170px  0 50px', md: '170px 0 60px', lg: '200px 0 70px' }}>
      <div id="brand-audit-widget"></div>
      <Script
        src="https://me.reviewshake.com/audit.js"
        strategy="lazyOnload"
        id="eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnQiOiJtZSIsImhvc3QiOiJtZS5yZXZpZXdzaGFrZS5jb20iLCJzdG9yZSI6MSwiaWF0IjoxNjc1MTU2MzU1fQ.C3zwxHqOYUKSGBNkVNIDt818-2VeJIlUn56kLNwQAU4"
      />
    </Container>
  );
};

export default BrandAuditPage;
