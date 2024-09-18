import react, { useState } from 'react';
import './App.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [name, setName] = useState('')
  const [no, setNo] = useState('')
  const [email, setEmail] = useState('')
  const [gstin, setGstin] = useState('')
  const [input, setInput] = useState('')

  const [nameErr, setNameErr] = useState('')
  const [noErr, setNoErr] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [gstinErr, setGstinErr] = useState('')
  const [inputErr, setInputErr] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!name){
      setNameErr("Name Requierd")
    }
    else{
      setNameErr("")
    }
    if(!input){
      setInputErr("Fill This Field")
    }
    else{
      setInputErr("")
    }
    if(!email){
      setEmailErr("Email Requierd")
    }else if(!email.includes("@")){
      setEmailErr("Email is not valid")
    }
    else{
      setEmailErr("")
    }
    if(!no){
      setNoErr("Number Requierd")
    }else{
      setNoErr("")
    }
    if(!gstin){
      setGstinErr("GST Number Requierd")
    }else{
      setGstinErr("")
    }
  }

  return (
    <div className="form-container">
      <form className="seller-form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Seller Information Form</h2>
        
        <div className="form-group">
          <label>Seller Name</label>
          <input type="text" id="seller-name" name="seller-name" placeholder="Enter seller name" onChange={(e)=> setName(e.target.value)}/>
          <span>{nameErr}</span>
        </div>

        <div className="form-group">
          <label>Mobile No</label>
          <input type="tel" id="mobile-no" name="mobile-no" placeholder="Enter mobile number" pattern="[0-9]{10}" onChange={(e)=> setNo(e.target.value)}/>
          <span>{noErr}</span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}/>
          <span>{emailErr}</span>
        </div>

        <div className="form-group">
          <label>GST No</label>
          <input type="text" id="gst-no" name="gst-no" placeholder="Enter GST number" pattern="\d{15}" onChange={(e)=> setGstin(e.target.value)}/>
          <span>{gstinErr }</span>
        </div>

        <div className="form-group">
          <label>Select Category</label>
          <select id="category" className='required' name="category" onChange={handleCategoryChange} value={selectedCategory} >
            <option value="">--Select Category--</option>
            <option value="mobiles">Mobiles</option>
            <option value="home-appliances">Home Appliances</option>
            <option value="clothes">Clothes</option>
            <option value="jewelry">Jewelry</option>-
            <option value="footwear">Footwear</option>
          </select>
        </div>

        {selectedCategory === 'mobiles' && (
          <>
            <div className="form-group">
              <label>Brand</label>
              <input type="text" id="brand" name="brand" placeholder="Enter mobile brand" onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>

            <div className="form-group">
              <label>Model</label>
              <input type="text" id="model" name="model" placeholder="Enter mobile model"onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>

            <div className="form-group">
              <label>RAM</label>
              <input type="text" id="ram" name="ram" placeholder="Enter RAM size"onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>
          </>
        )}

        {selectedCategory === 'home-appliances' && (
          <>
            <div className="form-group">
              <select id="category">
                <option value="">--Select Appliances--</option>
                <option value="TV">TV</option>
                <option value="Fridge">Fridge</option>
                <option value="">AC</option>
              </select>
            </div>

            <div className="form-group">
              <label>Brand</label>
              <input type="text" id="brand" name="brand" placeholder="Enter brand name"  onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>

            <div className="form-group">
              <label>Model</label>
              <input type="text" id="model" name="model" placeholder="Enter model number"  onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>
          </>
        )}

        {selectedCategory === 'clothes' && (
          <>
            <div className="form-group">
              <select id="category">
                <option value="">--Select Cetegory--</option>
                <option value="mens">Men's Wear</option>
                <option value="womens">Women's Wear</option>
                <option value="children">Children Wear</option>
              </select>
            </div>

            <div className="form-group">
              <label>Brand</label>
              <input type="text" id="brand" name="brand" placeholder="Enter cloth brand"  onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>

            <div className="form-group">
              <label>Size</label>
              <input type="text" id="size" name="size" placeholder="Enter size" onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>
          </>
        )}

        {selectedCategory === 'jewelry' && (
          <>
            <div className="form-group">
              <select id="category">
                <option value="">--Select Metal--</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="platinum">Platinum</option>
              </select>
            </div>

            <div className="form-group">
              <label>Jewelry Type</label>
              <input type="text" id="type" name="type" placeholder="Enter jewelary type"  onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>

            <div className="form-group">
              <label>Hallmark</label>
              <input type="text" id="hallmark" name="hallmark" placeholder="Enter Hallmark"  onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>
          </>
        )}

        {selectedCategory === 'footwear' && (
          <>
            <div className="form-group">
              <select id="category">
                <option value="">--Select Type--</option>
                <option value="slipers">Slipers</option>
                <option value="sandals">Sandals</option>
                <option value="shoes">Shoes</option>
              </select>
            </div>

            <div className="form-group">
              <select id="category">
                <option value="">--Select Gender--</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>

            <div className="form-group">
              <label>Size</label>
              <input type="text" id="size" name="size" placeholder="Enter size"onChange={(e)=> setInput(e.target.value)}/>
              <span>{inputErr}</span>
            </div>
          </>
        )} 

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}