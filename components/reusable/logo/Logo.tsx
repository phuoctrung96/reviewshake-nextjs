import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  handleClick?: () => void;
  className?: string;
};

const Logo = ({ handleClick, className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`${className}`} onClick={handleClick}>
      <div>
        <Image
          src="/assets/images/reviewshake-logo.svg"
          width={191}
          height={43}
          alt="Reviewshake logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
