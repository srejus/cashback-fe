import './styles/form.css';

function CompleteProfile() {
    return(
        <div className='login-main'>
            <div className='login-inner'>
                <h1>Complete Your Profile</h1><br></br>
                <form>
                    <input placeholder='Enter Your FullName...*' required type='text' className='form-control'/><br/>
                    <input placeholder='Enter Your Phone...*' required type='number' className='form-control'/><br/>
                    <input placeholder='Enter Your Place...*' required type='text' className='form-control'/><br/>
                    <input placeholder='Referral Code (optional)' type='text' className='form-control'/><br/>
                    <button className='btn btn-primary dbtn'>Complete Setup</button>
                </form>
            </div>
            <button className='btn btn-primary mbtn'>Complete Setup</button>
            <div className='login-inner sec'>
                <img src='https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461161.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user0' className='login-cover'/>
            </div>
        </div>
    )
}

export default CompleteProfile;