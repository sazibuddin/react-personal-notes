import React,{useState} from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    return (
        <React.Fragment>
            <h3>Have an account ? </h3>
            <h5>Login here</h5>
            <br/>
             <form noValidate>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Enter your email" />
                </div>
            </form>

            
        </React.Fragment>
    );
};

export default LoginForm;