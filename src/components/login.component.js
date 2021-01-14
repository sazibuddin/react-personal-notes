import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <React.Fragment>
     <div className="card">
         <div className="card-header">
            <h3 className="text-center">Have an account ? </h3>
            <h5 className="text-center">Login here</h5>
         </div>
         <div className="card-body">
      <form noValidate>
        <div className="form-group">
          <input
            noValidate
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="from-group">
          <input
           type="password"
           name="password"
           className="form-control"
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setpassword(e.target.value)}
            />
        </div>
        <div className="from-group mt-2 text-right">
            <button type="button" className="btn btn-outline-danger">Cancel <i className="fas fa-times"></i> </button>
            <button type="submit" className="btn btn-primary ml-2">Login <i className="fas fa-sign-in-alt"></i> </button>
            
        </div>
      </form>
         </div>
     </div>
    </React.Fragment>
  );
};

export default LoginForm;
