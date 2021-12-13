import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { getAllPrints } from "../../services/HttpReq";

function Prints() {
  const [fetchData, setFetchData] = useState([])
  useEffect(() => {
    const fetching = async () => {
      const fetchPrints = await getAllPrints();
      setFetchData(fetchPrints);
    }
    fetching();
    console.log(fetchData)
  } , [])
  return (
    <Layout>
    <div>
        <div>This is the Prints page </div>
        {/* {fetchData.map((print) => {
          <Link><img src=`${ }`/></Link>
        })} */}
      </div>
      </Layout>
  )
}
export default Prints;