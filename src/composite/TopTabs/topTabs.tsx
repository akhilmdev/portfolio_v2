import { TopTabName, TopTabsWrapper, TopTabWrapper } from "./topTabs.style";
import Close from "../../assets/icons/close.svg?react";
import { IconMapper } from "../../config/iconMapper";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";

const TopTabs: React.FC = () => {
  const tabs = [
    { text: "welcome", icon: IconMapper["welcome"] },
    { text: "index.html", icon: IconMapper["html"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
    { text: "home.ts", icon: IconMapper["ts"] },
  ] as const;

  const scrollRef = useHorizontalScroll<HTMLDivElement>();

  return (
    <TopTabsWrapper>
      <div className="scrollbar" id="scrollBar" ref={scrollRef}>
        {tabs.map((tab) => (
          <TopTabWrapper key={tab.text}>
            <tab.icon className="icon" />
            <TopTabName>{tab.text}</TopTabName>
            <Close className="icon" />
          </TopTabWrapper>
        ))}
      </div>
    </TopTabsWrapper>
  );
};

export default TopTabs;
