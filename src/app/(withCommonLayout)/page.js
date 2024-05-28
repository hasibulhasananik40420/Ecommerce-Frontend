import HomePageSlider from '../../components/ui/Silder/HomePageSlider'
import DiscountLaptop from '../../components/ui/DiscountLaptop/DiscountLaptop'
import Policy from '../../components/ui/Policy/Policy'
import FlashSale from '../../components/ui/FlashSale/FlashSale'
import AllCategories from '../../components/ui/AllCategories/AllCategories'

const HomePage = () => {
  return (
    <div>
       <AllCategories/>
       <HomePageSlider/>
        <Policy/>
      
       <DiscountLaptop/>
       <FlashSale/>
    </div>
  )
}

export default HomePage