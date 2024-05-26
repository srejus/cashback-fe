import './styles/form.css';

function VerifyOTP() {
    return(
        <div className='login-main'>
            <div className='login-inner'>
                <h1>Verify OTP</h1>
                <form>
                    <input placeholder='Enter OTP' required type='number' className='form-control'/><br></br>
                    <button className='btn btn-primary dbtn'>Verify</button>
                    <p>Check your email for the OTP</p>
                </form>
            </div>
            <button className='btn btn-primary mbtn'>Verify</button>
            <div className='login-inner sec'>
                <img src='https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461161.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user0' className='login-cover'/>
            </div>
        </div>
    )
}

export default VerifyOTP;