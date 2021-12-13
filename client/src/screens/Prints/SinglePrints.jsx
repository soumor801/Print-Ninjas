import Layout from "../../components/Layout";
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {getOnePrint} from '../../services/HttpReq'

function SinglePrint() {
  const [onePrint, setOnePrint] = useState([])
  let { id } = useParams();
  useEffect(() => {
    const fetchPrint = async () => {
      const print = await getOnePrint(id);
      setOnePrint(print)
    };
    fetchPrint();
    
  },[])
  return (
    <Layout>
      <div className='wrapper'>
        <img className="url" src={onePrint.image_link} />
        <h2 className="name">{onePrint.title}</h2>
            <h3 className="price">{`$ ${onePrint.price}`}</h3>
            <p className="description">{onePrint.description}</p>
      </div>
      </Layout>
  )
}
export default SinglePrint;