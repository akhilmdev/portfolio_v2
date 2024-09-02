import {
  MenuWrapper,
  SearchWrapper,
  SideBarWrapper,
  TabContainerWrapper,
  TabWrapper,
} from "./sideBar.style";
import Menu from "../../assets/icons/menu.svg?react";
import Search from "../../assets/icons/search.svg?react";

const SideBar: React.FC = () => {
  return (
    <SideBarWrapper>
      <TabWrapper>
        <MenuWrapper>
          <Menu className="icon" />
        </MenuWrapper>
        <SearchWrapper>
          <Search className="icon" />
        </SearchWrapper>
      </TabWrapper>
      <TabContainerWrapper>side container</TabContainerWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
