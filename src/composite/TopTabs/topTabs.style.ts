import styled from "@emotion/styled";

export const TopTabsWrapper = styled.div`
  height: 35px;
  display: flex;
  width: calc(100%-100px);
  background: var(--color-top-tabs-bg);
  .icon {
    margin: auto;
    fill: var(--color-icon);
    cursor: pointer;
  }
  .scrollbar {
    display: flex;
    overflow-x: hidden;
  }

  .scrollbar:hover {
    overflow-x: scroll;
  }

  #scrollBar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #000000;
  }

  #scrollBar::-webkit-scrollbar {
    height: 3px;
    background-color: #000000;
  }

  #scrollBar::-webkit-scrollbar-thumb {
    background-color: var(--color-scroll);
  }
`;

export const TopTabWrapper = styled.div`
  display: flex;
  padding: 10px;
  gap: 5px;
  border-right: 1px solid var(--color-top-tab-border);
  background-color: var(--colors-top-tab-bg);
  color: var(--color-top-tab-text);
  cursor: pointer;
`;

export const TopTabName = styled.p`
  margin: auto;
  line-height: 0.8;
  margin-bottom: 3px;
`;
