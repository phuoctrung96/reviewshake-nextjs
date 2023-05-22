import Section, { SectionBackgroundColorsType } from '@/components/reusable/section/Section';
import Container from '@/components/reusable/container/Container';
import HeadingBase from '@/components/reusable/heading/Heading';
import Accordion, { AccordionItem } from '@/components/reusable/accordion/Accordion';

type FaqSectionType = {
  backgroundColor?: SectionBackgroundColorsType;
  faqItems: AccordionItem[];
};

const FaqSection = ({ backgroundColor = 'gray', faqItems }: FaqSectionType) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <HeadingBase as="h2" fontSize={{ _: '3.2rem', md: '4.8rem' }}>
          Frequently asked questions
        </HeadingBase>
        <Accordion accordionItems={faqItems} />
      </Container>
    </Section>
  );
};

export default FaqSection;
