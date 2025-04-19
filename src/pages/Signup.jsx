import React, {useState} from 'react'


const Signup = () => {

  const [user, setUser]= useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })

  const[errors, setErrors] = useState({})
  const [submit, setSubmit] =useState(false)


  const handleChange=(e)=>{
    const{name, value} =e.target
    setUser({...user, [name]:value})
  }

  // setUser({...user,[e.target.name]:e.target.value})

  const validate =(user)=>{
    let errors ={};
    if (!user.firstName){
      errors.firstName = 'First Name is required'; 
    }
    if (!user.lastName || !user.lastName.trim()){
      errors.lastName = 'Last Name is required';
  }
  if (!user.email || !user.email.trim()){
    errors.email = 'Email Address is required';
  }else if(!/\S+@\S+\.\S+/.test(user.email)){
    errors.email = "Email Address is invalid";
  }
  if (!user.password || !user.password.trim()){
    errors.password = 'Password is required';
  }else if(user.password.length < 8){
    errors.password = "Password must be at Least 8 characters long";
  }
  return errors;
}



  const handleSubmit=(e)=>{
    e.preventDefault();
    const validationErrors=validate(user)
    if(Object.keys(validationErrors).length === 0){
      console.log(user);
      setSubmit(true);
    }else{setErrors(validationErrors);
      setSubmit(false);
    }

   
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center items-center h-screen w-10/12 mx-auto font-poppins py-10 gap-10'>
    <div className='text-white text-center lg:text-start space-y-10 w-full lg:w-1/2'>
      <h1 className='text-4xl font-bold'>Learn to code by watching others</h1>
      <p className='font-medium'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
    </div>

    <div className='w-full lg:w-1/2 space-y-5'>
     <div className='w-full text-white bg-[#6055a5] py-3 text-center rounded-md lg:px-9'>
     <span className='font-semibold'>Try it free 7 days</span><span className=''> then $20/mo. thereafter</span> 
     </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-5 bg-white p-6 lg:p-10 rounded-md'>

        <div className="flex flex-col"> 
          <input type="text" placeholder='FirstName' className='px-3 py-2 border border-[#b9b6d3] outline-[#6055a5] rounded-md text-[#3e3c49] font-semibold'name='firstName'value={user.firstName} onChange={handleChange}/> {errors.firstName && <p className='text-[#ff7a7a] text-end'>{errors.firstName}</p>} 
        </div>

        <div className="flex flex-col"> 
        <input type="text" placeholder='LastName' className='px-3 py-2 border border-[#b9b6d3] outline-[#6055a5] rounded-md text-[#3e3c49] font-semibold'name ='lastName'value={user.lastName} onChange={handleChange}/> {errors.lastName && <p className='text-[#ff7a7a] text-end'>{errors.lastName}</p>}
        </div>

        <input type="text" placeholder='Email Address' className='px-3 py-2 border border-[#b9b6d3] outline-[#6055a5] rounded-md text-[#3e3c49] font-semibold'name ='email'value={user.email} onChange={handleChange}/>
        
        <input type="text" placeholder='Password' className='px-3 py-2 border border-[#b9b6d3] outline-[#6055a5] rounded-md text-[#3e3c49] font-semibold'name ='password'value={user.password} onChange={handleChange}/>

        <button type='submit' className='bg-[#38cc8c] text-white py-3 rounded-md font-semibold'>CLAIM YOUR FREE TRIAL</button>

        <p className='text-center text-[10px] font-semibold text-[#b9b6d3]'>By clicking the button, you  are agreeing to our <span className='text-[#ff7a7a]'>Terms and Services</span></p> {submit &&<p className='text-center'>Form submitted successfully</p>}

      </form>
    </div>

  </div>
  )
}

export default Signup