import {
  FooterWrapper,
  LayoutWrapper,
  LeftDetails,
  LeftWrapper,
  NotificationWrapper,
  RemortWrapper,
  RightWrapper,
  TextWrapper,
} from "./footer.style";
import Remote from "../../assets/icons/remote.svg?react";
import SourceControl from "../../assets/icons/source-control.svg?react";
import Bell from "../../assets/icons/bell.svg?react";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LeftWrapper>
        <RemortWrapper>
          <Remote className="icon" />
        </RemortWrapper>
        <LeftDetails>
          <SourceControl className="icon" style={{ width: "12px" }} />
          <TextWrapper>Portfolio</TextWrapper>
        </LeftDetails>
      </LeftWrapper>

      <RightWrapper>
        <LayoutWrapper>Layout: US</LayoutWrapper>
        <NotificationWrapper>
          <Bell className="icon" />
        </NotificationWrapper>
      </RightWrapper>
    </FooterWrapper>
  );
};

export default Footer;
