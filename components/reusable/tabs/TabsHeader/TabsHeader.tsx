import TabsButton from '@/components/reusable/tabs/TabsButton/TabsButton';
import { Dispatch, SetStateAction } from 'react';

type TabsHeaderType = {
  tabButtons: string[];
  activeTab: number;
  handleTabChange: Dispatch<SetStateAction<number>>;
};

const TabsHeader = ({ tabButtons, activeTab, handleTabChange }: TabsHeaderType) => {
  return (
    <div>
      {tabButtons.map((tabButton, index) => (
        <TabsButton
          key={index}
          text={tabButton}
          isActive={activeTab === index ? true : undefined}
          disabled={activeTab === index ? true : undefined}
          onClick={() => handleTabChange(index)}
        />
      ))}
    </div>
  );
};

export default TabsHeader;
