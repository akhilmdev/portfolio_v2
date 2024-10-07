import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--colors-header-bg);
  height: 36px;
  .icon {
    margin: auto 5px;
    fill: var(--color-icon);
    cursor: pointer;
  }
`;

export const LeftWrapper = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  width: 35%;
  margin: auto 0;
  color: var(--colors-header-text);
`;

export const RightWrapper = styled.div`
  display: flex;
  margin: auto 4px;
`;
