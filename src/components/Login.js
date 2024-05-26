import './styles/form.css';

function Login() {
    return(
        <div className='login-main'>
            <div className='login-inner'>
                <h1>Enter Your Email</h1>
                <form>
                    <input placeholder='Enter Your Email' required type='email' className='form-control'/><br></br>
                    <button className='btn btn-primary dbtn'>Continue</button>
                </form>
            </div>
            <button className='btn btn-primary mbtn'>Continue</button>
            <div className='login-inner sec'>
                <img src='https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461161.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716595200&semt=ais_user0' className='login-cover'/>
            </div>
        </div>
    )
}

export default Login;