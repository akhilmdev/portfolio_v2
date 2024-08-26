import styled from "@emotion/styled";

export const SearchBarWrapper = styled.div`
  border: 1px solid var(--color-header-border);
  height: 22px;
  border-radius: 6px;
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  background: #ffffff24;
  cursor: pointer;

  .search-icon {
    width: 14px;
    height: 14px;
    margin: auto 3px;
    opacity: 0.8;
  }
`;
export const SearchText = styled.p`
  margin: 0;
`;
