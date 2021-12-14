import Layout from "../../components/Layout";
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deletePrint, getOnePrint } from '../../services/HttpReq'
import SingleCSS from '../../screens/PrintCSS/SinglePrint.css'

function SinglePrint() {
  const [onePrint, setOnePrint] = useState([])
  const navigate = useNavigate()
  let { id } = useParams();
  useEffect(() => {
    const fetchPrint = async () => {
      const print = await getOnePrint(id);
      setOnePrint(print)
    };
    fetchPrint();
  }, [])
 
    const removePrint = async () => {
      deletePrint(id)
      navigate('/prints')
  }
  return (
    <Layout>
      <div className='wrapper'>
        <img className="url" src={onePrint.image_link} />
        <div className='info'>
        <h2 className="name">{onePrint.title}</h2>
            <h3 className="price">{`$ ${onePrint.price}`}</h3>
            <p className="description">{onePrint.description}</p>
            </div>
      </div>
      <div className='button-container' >
      <button className='deleteButton' onClick={() => navigate(`/print-edit/${id}`)}>Edit</button>
      <button className='deleteButton' onClick={removePrint}>Delete</button>
      </div>
      
      </Layout>
  )
}
export default SinglePrint;