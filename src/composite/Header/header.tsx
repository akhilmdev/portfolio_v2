/// <reference types="vite-plugin-svgr/client" />

import {
  HeaderWrapper,
  LeftWrapper,
  RightWrapper,
  SearchWrapper,
} from "./header.style";

import ArrowLeft from "../../assets/icons/arrow-left.svg?react";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import LayoutSideBarLeftOff from "../../assets/icons/layout-sidebar-left-off.svg?react";
import LayoutSideBarRightOff from "../../assets/icons/layout-sidebar-right-off.svg?react";
import LayoutPannelOff from "../../assets/icons/layout-panel-off.svg?react";
import Layout from "../../assets/icons/layout.svg?react";
import SearchBar from "../../components/SearchBar/searchBar";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LeftWrapper>left</LeftWrapper>
      <SearchWrapper>
        <ArrowLeft className="icon" />
        <ArrowRight className="icon" />
        <SearchBar />
      </SearchWrapper>
      <RightWrapper>
        <LayoutSideBarLeftOff className="icon" />
        <LayoutPannelOff className="icon" />
        <LayoutSideBarRightOff className="icon" />
        <Layout className="icon" />
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
