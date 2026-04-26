import React from 'react';

const LoginScreen = ({ onLogin }) => {
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (onLogin) {
            onLogin(password);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter your password" 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginScreen;
