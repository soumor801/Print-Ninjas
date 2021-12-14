import Layout from "../../components/Layout";
import { useNavigate } from 'react-router-dom'
import {useState } from 'react'
import { createPrint } from "../../services/HttpReq";
import CreateCSS from '../../screens/PrintCSS/CreatePrint.css'
function CreatePrint() {
  const navigate = useNavigate()

  const [print, setPrint] = useState({
    title: '',
    image_link: '',
    description: '',
    anime_name: '',
    price: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPrint({
      ...print,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createPrint(print)
    setCreated({ created })
  }

  if (isCreated) {
    navigate("/prints")
  }
  
  return (
    <Layout>
    <div>
        <div className='create-form-container'>
    <div className='form-wrapper'>      
      <form className='create-form' onSubmit={handleSubmit}>
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
        <input
          className="addproduct-input"
          id='input-price'
          placeholder='Price'
          value={print.price}
          name='price'
          required
          onChange={handleChange}
        />
      </form>
        <button type='submit' className='add-submit-button'>let's go</button>
      </div>
      </div>
      </div>
      </Layout>
  )
}
export default CreatePrint;