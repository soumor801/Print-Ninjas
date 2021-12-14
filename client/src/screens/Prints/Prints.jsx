import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { getAllPrints } from "../../services/HttpReq";
import PrintCSS from '../../screens/PrintCSS/Prints.css'

function Prints() {
  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    const fetching = async () => {
      const fetchPrints = await getAllPrints();
      setFetchData(fetchPrints);
    }
    fetching();
    
  }, [])
  return (
    <Layout>
    <div className='prints-wrapper'>
        <div className='prints'>
        {fetchData.map((print) => 
          <div>
          
          <Link to={`/print/${print.id}`} > <img className='print-image' src={print.image_link} /> <h4>{print.title}</h4> </Link>
          </div>
        )}
        </div>
        <Link className="addProduct" to="/create-print">
        {" "}
        add a Print
      </Link>
      </div>
      </Layout>
  )
}
export default Prints;