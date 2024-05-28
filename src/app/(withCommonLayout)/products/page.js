import Container from "../../../components/shared/Container/Container"
import ProductCard from "../../../components/ui/card/card"

const Products = () => {
  return (
     <div className="bg-[#F8F8F8] py-10">
         <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
     </Container>
     </div>
  )
}

export default Products