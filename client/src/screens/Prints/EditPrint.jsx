import Layout from "../../components/Layout";
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router";
import { getOnePrint, updatePrint } from "../../services/HttpReq";
import EditPrintCSS from '../../screens/PrintCSS/EditPrint.css'
const EditPrint = (props) => {
  const [print, setPrint] = useState({
    title: "",
    description: "",
    image_link: "",
    price: "",
    anime_name: ""

  });

  const [isUpdated, setIsUpdated] = useState(false);
  let navigate = useNavigate()
  let { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getOnePrint(id);
      setPrint(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPrint({
      ...print,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    updatePrint(id, print);
    setIsUpdated(true)
  };

  if (isUpdated) {
    return navigate(`/print/${id}`)
  }
  return (

    <div>
        <div className='form-wrappers'>
          <img className='url' src={print.image_link}/>
          <div className='form-box'>
      <form className='editForm' onSubmit={handleSubmit}>
        <h2 className="addproduct-h2">Add a Print</h2>
        <input 
          className="addproduct-input"
          id='input-name'
          placeholder='Title'
          value={print.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input 
          className="addproduct-input"
          id='input-anime-name'
          placeholder='Anime Name'
          value={print.anime_name}
          name='anime_name'
          required
          autoFocus
          onChange={handleChange}
        />
          <input
            className="addproduct-input"
            id='input-price'
            placeholder='Price'
            value={print.price}
            name='price'
            required
            onChange={handleChange}
          />
          <input 
          className="addproduct-input"
          id='input-image-link'
          placeholder='Image link url'
          value={print.image_link}
          name='image_link'
          required
          onChange={handleChange}
        />
        <textarea 
          className="addproduct-input"
          id='text-area-description'
          rows={10}
          placeholder='Description'
          value={print.description}
          name='description'
          required
          onChange={handleChange}
        />
        <button type='submit' className='add-submit-button' >Edit Print</button>
        
      </form>
      </div>
      </div>
      </div>

  )
}
export default EditPrint;