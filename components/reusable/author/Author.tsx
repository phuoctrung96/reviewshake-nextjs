import Image from 'next/image';
import Text from '@/components/reusable/text/Text';
import { AuthorWr, AvatarWr } from './author.styles';

type AuthorType = {
  authorName: string;
  description: string;
  photoFilename?: string;
  viewType?: 'default' | 'review';
};

const Author = ({ authorName, description, photoFilename, viewType = 'default' }: AuthorType) => {
  const isReviewType = viewType === 'review';

  return (
    <AuthorWr>
      <AvatarWr>
        {photoFilename ? (
          <Image
            src={`/assets/images/reviews/${photoFilename}.jpg`}
            width={38}
            height={38}
            alt=""
          />
        ) : (
          <Image src={`/assets/images/reviews/avatar.png`} width={52} height={52} alt="" />
        )}
      </AvatarWr>
      <Text
        fontSize={isReviewType ? { _: '1.5rem' } : { _: '1.6rem' }}
        lineHeight={isReviewType ? { _: '1.3667' } : { _: '1.375' }}
        m={0}
      >
        <strong
          css={
            !isReviewType &&
            `
            font-size: 1.7rem;
          `
          }
        >
          {authorName}
        </strong>
        {description}
      </Text>
    </AuthorWr>
  );
};

export default Author;
