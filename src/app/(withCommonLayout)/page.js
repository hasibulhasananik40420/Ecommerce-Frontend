import HomePageSlider from "../../components/ui/Silder/HomePageSlider";
import DiscountLaptop from "../../components/ui/DiscountLaptop/DiscountLaptop";
import Policy from "../../components/ui/Policy/Policy";
import FlashSale from "../../components/ui/FlashSale/FlashSale";
import AllCategories from "../../components/ui/AllCategories/AllCategories";
import TopProducts from "../../components/ui/home/topProducts/TopProducts";
import NewProducts from "../../components/ui/home/newProducts/newProducts";
import SliderCard from "../../components/ui/Silder/SliderCard";

const HomePage = () => {
  return (
    <div>
      {/* <AllCategories />
      <HomePageSlider />
      <Policy />

      <DiscountLaptop />
      <FlashSale /> */}
      <NewProducts />
      <TopProducts />
    </div>
  );
};

export default HomePage;
