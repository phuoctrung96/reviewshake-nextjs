import { StyledFlex } from '@/components/reusable/tabs/Tabs/tabs.styles';
import TabsHeader from '@/components/reusable/tabs/TabsHeader/TabsHeader';
import { useState } from 'react';
import { TAB_BUTTONS } from '@/components/reusable/tabs/tabsData';
import TabsContent, {
  TabsContentViewType,
} from '@/components/reusable/tabs/TabsContent/TabsContent';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledFlex>
      <TabsHeader tabButtons={TAB_BUTTONS} activeTab={activeTab} handleTabChange={setActiveTab} />
      <TabsContent viewType={TAB_BUTTONS[activeTab].toLowerCase() as TabsContentViewType} />
    </StyledFlex>
  );
};

export default Tabs;
