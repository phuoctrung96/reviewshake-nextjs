import 'slick-carousel/slick/slick.css';
import { StyledSlider } from '@/components/reusable/tabs/TabsContent/tabsContent.styles';
import { TABS_CONTENT } from '@/components/reusable/tabs/tabsData';
import TabsReviewSlider from '@/components/reusable/tabs/TabsReviewSlider/TabsReviewSlider';
import TabsReviewCarousel from '@/components/reusable/tabs/TabsReviewCarousel/TabsReviewCarousel';
import TabsReviewGrid from '@/components/reusable/tabs/TabsReviewGrid/TabsReviewGrid';
import TabsReviewSummary from '@/components/reusable/tabs/TabsReviewSummary/TabsReviewSummary';
import Flex from '@/components/reusable/flex/Flex';
import TabsReviewQuotes from '@/components/reusable/tabs/TabsReviewQuotes/TabsReviewQuotes';
import TabsReviewList from '@/components/reusable/tabs/TabsReviewList/TabsReviewList';

type TabsContentType = {
  viewType: TabsContentViewType;
};

export type TabsContentViewType = 'slider' | 'carousel' | 'grid' | 'quotes' | 'list';

const TabsContent = ({ viewType }: TabsContentType) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const isSlider = viewType === 'slider';
  const isCarousel = viewType === 'carousel';
  const isGrid = viewType === 'grid';
  const isQuote = viewType === 'quotes';
  const isList = viewType === 'list';

  return (
    <div>
      {isGrid && <TabsReviewSummary />}

      {(isSlider || isCarousel) && (
        <StyledSlider {...settings}>
          {TABS_CONTENT.map(
            (content, index) =>
              (isSlider && <TabsReviewSlider key={index} content={content} />) ||
              (isCarousel && <TabsReviewCarousel key={index} content={content} />)
          )}
        </StyledSlider>
      )}

      {isGrid && (
        <Flex m={'4rem 0 2rem'} flexDirection={{ _: 'column', md: 'row' }}>
          {TABS_CONTENT.filter((item, index) => index <= 1).map((content, index) => (
            <TabsReviewGrid key={index} content={content} isLast={index === 1} />
          ))}
        </Flex>
      )}

      {isQuote && (
        <Flex m={'4rem 0 2rem'} flexDirection={'column'}>
          {TABS_CONTENT.filter((item, index) => index <= 1).map((content, index) => (
            <TabsReviewQuotes key={index} content={content} isLast={index === 1} />
          ))}
        </Flex>
      )}

      {isList && (
        <Flex m={'4rem 0 2rem'} flexDirection={'column'}>
          {TABS_CONTENT.filter((item, index) => index <= 1).map((content, index) => (
            <TabsReviewList key={index} content={content} isLast={index === 1} />
          ))}
        </Flex>
      )}
    </div>
  );
};

export default TabsContent;
