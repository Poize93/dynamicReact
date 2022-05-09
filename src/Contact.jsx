import React,{useState} from 'react';

const Contact=()=>{
const [data, setData]=useState({
  fullname:'',
  phone:'',
  email:'',
  message:''
});

  // const InputEvent=(event)=>{
  //   const {name,value}=event.target;
  //   setData((preval))={
  //     return{
  //       ...preval,
  //       [name]:value,
  //     };
  //   }
  // }

  const formSubmit=(e)=>{
  e.preventDefault()
  alert(`${data.fullname}. My Mobile Number is ${data.phone}. Here is what I want to Say ${data.message}`)
  }


  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name" name="fullname" value={data.fullname} onChange={InputEvent}/>
                
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Phone Number</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Phone Number" name="phone" value={data.phone} onChange={InputEvent}/>
                
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={data.email} onChange={InputEvent}/>
               
            </div>
            <br/>

            <div class="form-group">
                <label for="exampleInputEmail1">Message</label>
                <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="message" value={data.message} onChange={InputEvent}/>
            </div>
            <br/>
            
           <button class= "btn btn-outline-primary" type="submit"> Submit Form</button>
</form>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Contact;
  ;