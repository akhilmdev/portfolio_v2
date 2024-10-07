import Contents from "../../composite/Contents/contents";
import Footer from "../../composite/Footer/footer";
import Header from "../../composite/Header/header";
import SideBar from "../../composite/SideBar/sideBar";
import TopTabs from "../../components/TopTabs/topTabs";
import { MainContent, RightWrapper } from "./home.style";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent>
        <SideBar />
        <RightWrapper>
          <TopTabs />
          <Contents />
        </RightWrapper>
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
