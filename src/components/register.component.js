import React, { useState } from 'react';

const RegisterForm = () => {
    const [state , setState] = useState({
        fristName:"",
        lastName:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setState({
            [name]: value
        })
    }

    return (
        <>
        <div className="card">
            <div className="card-header">
                <h3 className="text-center">New user ? </h3>
                <h5 className="text-center">Create account</h5>
            </div>
            <div className="card-body">
                <form noValidate>
                    <div className="form-group">
                        <input
                         type="text"
                         name="fristName"
                         className="form-control"
                         value={state.fristName}
                         onChange={handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <input
                         type="text"
                         name="lastName"
                         className="form-control"
                         value={state.lastName}
                         onChange={handleChange}
                         />
                    </div>
                    
                    <div className="form-group">
                        <input
                         type="email"
                         name="email"
                         className="form-control"
                         value={state.email}
                         onChange={handleChange}
                         />
                    </div>
                    <div className="form-group">
                        <input
                         type="password"
                         name="password"
                         className="form-control"
                         value={state.password}
                         onChange={handleChange}
                         />
                    </div>
                    <div className="from-group mt-2 text-right">
                        <button type="button" className="btn btn-outline-danger">Cancel <i className="fas fa-times"></i> </button>
                        <button type="submit" className="btn btn-primary ml-2">Login <i className="fas fa-sign-in-alt"></i> </button>
                        
                    </div>
                </form>
            </div>
        </div>
            

            <form noValidate>
                <div className="form-group">

                </div>
            </form>
        </>
    );
};

export default RegisterForm;