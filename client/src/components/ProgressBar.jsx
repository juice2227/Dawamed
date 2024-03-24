// eslint-disable-next-line no-unused-vars
import { Link } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ProgressBar = () => {
  const [step, setStep] = useState(1);
  //const [prescription, setPrescription] = useState('');
  //const [Recipient, setRecipient] = useState('');
  //const [PaymentInfo, setPaymentInfo] = useState('');
  const [activeForm, setActiveForm] = useState('myself');

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };
  
    const[selectFile, setSelectFile] = useState(null)
     
    const handleFileChange = (e) => {
      setSelectFile(e.target.files[0])
      
    }
    const handleUpload = () => {
      if (selectedFile) {
        console.log("Uploaded Sucessfully", selectedFile);
      }
        else{
        console.log("Select a file");  
    }
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <div className="mb-4">
            
            <div className="flex items-center mt-4">
              <div
                className={`w-1/4 ${
                  step >= 1 ? 'bg-blue-500' : 'bg-gray-300'
                } h-1`}
              ></div>
              <div
                className={`w-1/4 ${
                  step >= 2 ? 'bg-blue-500' : 'bg-gray-300'
                } h-1`}
              ></div>
              <div
                className={`w-1/4 ${
                  step >= 3 ? 'bg-blue-500' : 'bg-gray-300'
                } h-1`}
              ></div>
              <div
                className={`w-1/4 ${
                  step >= 4 ? 'bg-blue-500' : 'bg-gray-300'
                } h-1`}
              ></div>
              
            </div>
          </div>
         
          <form action="">
        
          <div className="mt-6">
            {step === 1 && (
              <div>
                <h3 className="text-lg text-gray-900 font-semibold mb-4">
                  Step 1: Start
                </h3>
                <hr />
                <div className='font-semibold  '>
                  <p className='text-bold text-gray-900'>Welcome to our site.
                    We will take you through all steps required for the medicine prescription.</p>
                    <div className='flex justify-between'>

                      
                    <input type="file" onChange={handleFileChange} className='rounded bg-colour-blue text-green'/>
                    <button onClick={handleUpload} 
                      className='px-4 py-2  bg-blue-500 text-black rounded hover:bg-green-500'>
                      Upload
                    </button>
                    </div>
                    
                </div>
                
                            
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Next
                </button>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Step 2: Upload Prescription
                </h3>
                
                <h3 className='font-bold poppins'>Confirm Uploads</h3>
                <h2 className='mt-3'>Select which option to use</h2>
                <hr />
                <p className='font-semibold'>In order to continue with the process provide us with the following information:</p>
                
                <div className='relative'>
                  <div className='absolute top-0 left-50 right-20'>
                    <div className='flex flex-col '>
                    <a href="./login" className='btn btn-sm  bg-gray-500 p-2 rounded mb-5'>Login</a>
                    <a href="./register" className='btn btn-sm  bg-blue-500 p-2 rounded '>Create Account</a>
                    </div>
                  </div>
                </div>

            
                <div className="flex justify-between mt-20">
                  <button
                    onClick={previousStep}
                    className="px-4 py-1 bg-gray-400 text-white rounded"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-4 py-1  bg-blue-500 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {step === 3 &&  (
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Step 3: Recipient 
                </h3>
                
                <div className=''>
                  <h3>Set your receipient</h3>
                    <hr />
                  
                    <button
                      className="btn btn-lg btn-block bg-blue-400 mt-0 py-2 px-4 rounded"
                      onClick = {() => setActiveForm('myself')}
                    >
                      Myself
                    </button>

                    <button
                      className="btn btn-lg btn-block bg-blue-400 mt-2 py-2 px-4 rounded flex flex-col"
                      onClick = {() => setActiveForm('dependant')}
                    >
                      Dependant
                    </button> 
                 
                  
                  <div>
                    {activeForm == 'myself' &&(
                        <div className='flex flex-col float-right mb-20 right-0'>                        
                        <div className="w-full max-w-lg">
                        <h4>Details</h4>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                              First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="firstname"/>
                            
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                              Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="lastname"/>
                          </div>
                        </div>
                        <div className='relative'>
                        <label htmlFor="">Gender</label>
                        <select name="" id="">
                          <option value="">select</option>
                          <option value="">Male</option>
                          <option value="">Female</option>
                        </select>

                        </div>
                        <div>
                        <p className='font-semibold'><label htmlFor="">Additional notes</label></p>
                       
                        <textarea className='border border-blue-500 text-blue' cols="40" rows="3" placeholder='add any additional instructions i.e medicine type'></textarea>
                        </div>
                        
                        
                      </div>
                        
                    </div>
                    )}
                    
                  {activeForm == 'dependant' && (
                        
                    <div className='flex flex-col float-right mb-20 left-20'>
                      <h4 className='font-semibold'>Details</h4>
                      <label htmlFor="">Relationship</label>
                      <select name="" id="">
                        <option value="">Select</option>
                        <option value="">Mother</option>
                        <option value="">Father</option>
                        <option value="">Husband</option>
                        <option value="">Wife</option>
                        <option value="">Sister</option>
                        <option value="">Brother</option>
                        <option value="">Child</option>
                        <option value="">Other</option>
                      </select>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                              First Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="firstname"/>
                            
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                              Last Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="lastname"/>
                          </div>
                      </div>
                      <label htmlFor=""className='text-green'>Gender</label>
                      <select name="" id="">
                        <option value="">select</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      <div>
                      <p><label htmlFor="">Additional notes</label></p>
                      <textarea className='border border-blue-500 text-blue' cols="40" rows="3" placeholder='add any additional instructions i.e medicine type'></textarea>
                      </div>
                    
                    </div>
                  )}
                   
                  </div>

                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={previousStep}
                    className="px-4 py-2 bg-gray-400 text-white rounded"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            
             
            {step === 4 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Step 5: Complete</h3>
                <p>Congratulations! Your process is complete.</p>
                <Link to="/cart"><button className='px-4 py-2 bg-blue-500 text-white rounded mt-4'>Start shopping</button></Link>
                
              </div>
            )}
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
