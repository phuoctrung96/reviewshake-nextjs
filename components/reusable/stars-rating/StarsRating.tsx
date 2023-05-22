import StarEmpty from '@/components/reusable/icons/StarEmpty';
import Star from '@/components/reusable/icons/Star';
import { StyledDiv } from '@/components/reusable/stars-rating/starsRating.styles';

type StartRatingType = {
  rating: number;
  style?: React.CSSProperties;
  color?: string;
};

const renderFullStars = (rating: number) => {
  let remainingRating = rating;
  let stars = [];

  for (let i = 0; i < 5; i++) {
    const activeStarValue = remainingRating >= 1 ? 1 : remainingRating;
    stars.push(
      <div key={i}>
        <Star style={{ clip: 'rect(0px, ' + 16 * activeStarValue + 'px, 16px, 0px)' }} />
      </div>
    );

    remainingRating = remainingRating - 1;
  }

  return stars;
};

const StarsRating = ({ rating, style, color }: StartRatingType) => {
  return (
    <StyledDiv $color={color} style={style}>
      <div>
        {[...Array(5)].map((_, index) => (
          <div key={index}>
            <StarEmpty />
          </div>
        ))}
      </div>
      <div>{renderFullStars(rating)}</div>
    </StyledDiv>
  );
};

export default StarsRating;
