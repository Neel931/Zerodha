import React from 'react';
function Signuo() {
    return (
        <div className='container  mt-5 pt-5'>
            <div className='row'>
            <div className='col-1'></div>
                <div className='col-6'>
                    <img src='media/images/signup.png' style={{width:"95%"}}/>
                </div>
                <div className='col-1'></div>
                <div className='col-4 mt-5'>
                    <h1 className='fs-2'>Signup now</h1>
                    <h5 className='text-muted fs-6'>Or track your existing application.</h5>
                    <input type='number' className='mt-3' placeholder='Mobile Number'></input>
                    <p className='text-muted mt-3'>You will receive an OTP on your number</p>
                    <button
                        className=" mt-3 p-2 btn btn-primary fs-5 mb-5"
                        style={{ width: "30%", margin: "0 auto" }}
                    >
                        Continue
                    </button><br/>
                    <a href='https://www.apnacollege.in/start' style={{textDecoration:"none", paddingTop:"100px"}}>Want to open an NRI account?</a>

                </div>
            </div>
        </div>
    );
}

export default Signuo;