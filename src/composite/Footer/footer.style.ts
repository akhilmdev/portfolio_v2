import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  background-color: var(--color-footer-bg);
  color: var(--colors-footer-text);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 22px;
  .icon {
    margin: auto 10px;
    fill: var(--colors-footer-text);
    cursor: pointer;
    width: 14px;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const RemortWrapper = styled.div`
  background-color: var(--colors-footer-remote-bg);
  width: 32px;
  display: flex;
`;

export const LeftDetails = styled.div`
  display: flex;
`;
export const TextWrapper = styled.span`
  marign: auto;
  font-size: 10px;
  margin: auto;
  margin-left: -4px;
`;

export const RightWrapper = styled.div`
  display: flex;
`;

export const LayoutWrapper = styled.div`
  font-size: 12px;
  display: flex;
  margin: auto 10px;
`;

export const NotificationWrapper = styled.div``;
