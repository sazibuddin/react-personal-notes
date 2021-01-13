import React from 'react';
import Header from '../components/header.component';
import LoginForm from '../components/login.component';
import RegisterForm from '../components/register.component';

const AuthPage = () => (
    <div>
        <div className="row my-2">
            <div className="row">
                <div className="col-md-6">
                    <LoginForm />
                </div>
                <div className="col-md-6">
                    <RegisterForm />
                </div>
            </div>
        </div>
    </div>
);
export default AuthPage;