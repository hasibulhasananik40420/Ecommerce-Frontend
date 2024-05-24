import { Button } from '@mui/material'
import HomePageSlider from '../../components/ui/Silder/HomePageSlider'
import DiscountLaptop from '../../components/ui/DiscountLaptop/DiscountLaptop'
import Policy from '../../components/ui/Policy/Policy'
import FlashSale from '../../components/ui/FlashSale/FlashSale'

const HomePage = () => {
  return (
    <div>
       <HomePageSlider/>
        <Policy/>
       <DiscountLaptop/>
       <FlashSale/>
    </div>
  )
}

export default HomePage