import { isValidElement, ReactNode } from 'react';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { StyledAccordion } from './accordion.styles';
import Text from '@/components/reusable/text/Text';
import ArrowDownIcon from '@/components/reusable/icons/ArrowDownIcon';

type AccordionProps = {
  accordionItems: AccordionItem[];
};

export type AccordionItem = {
  title: string;
  content: ReactNode | string;
};

const Accordion = ({ accordionItems }: AccordionProps) => {
  return (
    <StyledAccordion allowMultipleExpanded allowZeroExpanded>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {isValidElement(item.content) ? item.content : <Text>{item.content}</Text>}
          </AccordionItemPanel>
          <ArrowDownIcon />
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
