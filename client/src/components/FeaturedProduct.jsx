import { useEffect, useState } from "react";
import { getAllPrints } from '../services/HttpReq'
import FeatCSS from './components css/FeaturedProduct.css'
function FeaturedProduct() {
  const [prints, setPrints] = useState([])
  useEffect(() => {
    const fetchPrints = async () => {
      const allPrints = await getAllPrints()
      setPrints(allPrints)
    }
    fetchPrints()
  }, [])
  console.log(prints)
  return (
    <div>
      <h2>Featured Prints</h2>

      <div className='featured-products'>
        {prints.map((print) => 
          <div><img className='featured-img' src={print.image_link}/></div>
      )}
      </div>
    </div>
  )
}

export default FeaturedProduct;