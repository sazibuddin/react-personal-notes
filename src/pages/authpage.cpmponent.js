import React from 'react';
import Header from '../components/header.component';
import LoginForm from '../components/login.component';
import RegisterForm from '../components/register.component';

const AuthPage = () => (
    <div>
            <div className="row justify-content-between">
                <div className="col-md-5">
                    <LoginForm />
                </div>
                <div style={{ border: '1px solid #ababab' }}></div>
                <div className="col-md-6">
                    <RegisterForm />
                </div>
            </div>
    </div>
);
export default AuthPage;