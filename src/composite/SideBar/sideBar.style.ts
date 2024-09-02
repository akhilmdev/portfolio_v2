import styled from "@emotion/styled";

export const SideBarWrapper = styled.div`
  display: flex;
  border-right: 1px solid var(--color-side-bar-border);
  .icon {
    margin: 10px auto;
    fill: var(--colors-icon-inactive);
    cursor: pointer;
    width: 16px;
  }
`;

export const TabWrapper = styled.div`
  width: 48px;
  background-color: var(--colors-side-bar-bg);
  height: calc(100vh - 58px);
`;

export const MenuWrapper = styled.div``;
export const SearchWrapper = styled.div``;
export const TabContainerWrapper = styled.div`
  width: 260px;
  background-color: var(--colors-side-bar-container-bg);
  height: calc(100vh - 58px);
  color: #fff;
  padding: 0 20px;
  display: block;
`;
