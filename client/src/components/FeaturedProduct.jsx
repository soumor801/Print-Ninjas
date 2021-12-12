import { useEffect, useState } from "react";
import {getAllPrints} from '../services/HttpReq'
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
      <div>

      </div>
    </div>
  )
}

export default FeaturedProduct;