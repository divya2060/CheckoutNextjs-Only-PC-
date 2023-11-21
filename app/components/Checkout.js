import  {React, useState } from 'react';
import apple from './images/apple.png';
import './checkout.css';

const Checkout = () => {
  const [Email, setemail] = useState("");
  const [Name, setName] = useState("");
  const [Card, setcard] = useState("");
  const [Exp, setexp] = useState("");
  const [CVC, setCVC] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setcity] = useState("");
  const [Country, setcountry] = useState("");
  const [Postal, setPostal] = useState("");
  const [date, setdate] = useState("");
  const [Tnc, setTnc] = useState(false);
  const [total, settotal] = useState(0);
  function onSub(e){
    e.preventDefault();
   const details =[{
    name:Name,
    email:Email,
    card:Card,
    exp:Exp,
    cvc:CVC,
    address:Address,
    city:City,
    tnc:Tnc,
    tot:total,
    dt:date,
    postal:Postal,
    id:Math.random()*100
   }]
   console.log(details);
   setemail("")
   setAddress("");
   setCVC("");
   setName("");
   if(Tnc===true){
     setTnc(false);
   }
   setcard("");
   setPostal("");
   setcity("");
   setcountry("");
   setdate("");
   setexp("");
   settotal("")
  }
  return (
    <div className='ch-container'>
        <div className='c-left'>
         <button> <img src={apple} width={36} height={36} alt='Apple Pay'/></button>
         <div className='or'>
          <p>or</p>
         </div>
         <div className='form'>
          <form onSubmit={onSub}>
           <p>Email Address</p>
           <input type='email' placeholder='Enter Your Email address' onChange={(e)=>setemail(e.target.value)} value={Email} required/>
           <br></br>
           <br></br>
           <p>Name on card</p>
           <input type='text' placeholder='Enter the Cardholder Name' onChange={(e)=>setName(e.target.value)} value={Name} required/>
           <br></br>
           <br></br>
           <p>Card Number</p>
           <input type='text' placeholder='Enter Your Card Number' onChange={(e)=>setcard(e.target.value)} value={Card} required/>
           <br></br>
           <br></br>
           <div className='zip'>
             <label>
             <p> Expiration Date</p>
              <input type='number' placeholder='Enter the date'  onChange={(e)=>setdate(e.target.value)} value={date}/>
             </label>
             <label>
              <p>CVC</p>
              <input type='number' placeholder='Enter the three digits' onChange={(e)=>setCVC(e.target.value)} value={CVC}  required/>
             </label>
           </div>
           <br></br>
           <p>Address</p>
           <input type='text' placeholder='Street_no' onChange={(e)=>setAddress(e.target.value)} value={Address} required/>
           <br></br>
           <br></br>
           <div className='zip'>
            <label>
              <p>City</p>
              <input type='text' placeholder='Enter City' onChange={(e)=>setcity(e.target.value)} value={City} required/>
            </label>
            <label>
              <p>Country</p>
              <input type='text' placeholder='Enter Your Country' onChange={(e)=>setcountry(e.target.value)} value={Country} required/>
            </label>
            <label>
              <p>Postal code</p>
              <input type='number' placeholder='Postal Code' onChange={(e)=>setPostal(e.target.value)} value={Postal} required/>
            </label>
           </div>
           <br></br>
           <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> Billing address the same as shipping address
           <br></br>
          <button type='submit'>{`pay $${total}`}</button>
          </form>
         </div>
        </div>
        <div className='c-right'>
        <div className='c-top'>
       <h1>No Items Currently Added to Cart</h1>
        </div>
        <div className='c-low'>
        <label>
          <p>Discount</p>
          <input type='text' /> <span>Apply</span>
        </label>
        <label id='price'>
          <p>Subtotal       $0</p>
          <p>Discount       $0</p>
          <p>Tax Estimate    $0</p>
          <p>Shipping Estimate $0</p> 
        </label>
        <label>
          <h3>Order Total ${total}</h3>
        </label>
        </div>
        </div>
        </div>
  )
}

export default Checkout;