import Footer from "../../components/shared/Footer/Footer";
import Navbar from "../../components/shared/Navbar/Navbar";
import NavbarBottom from "../../components/shared/NavbarBottom/NavbarBottom";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <NavbarBottom />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
