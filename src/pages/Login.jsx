import React, { useState, useContext } from 'react';
import Banner from '../components/Banner';
import Input from '../components/Input';
import Button from '../components/Button';
import context from '../context/Context';
import { useNavigate } from 'react-router-dom';
import imagemLogin from '../images/login.png'


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setFunctions = {
    email: setEmail,
    password: setPassword,
  };

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  const verifyEmail =  emailRegex.test(email)
  const disabled = !verifyEmail || password.length < 6;

  const handleChange = ({ target }) => {
    setFunctions[target.name](target.value);
    if (target.name === 'email' && !verifyEmail ) {
      console.log(target.value);
  }}

  const { setUser } = useContext(context);
  const handleClick = async () => {
    setUser(email);
    navigate('/todo');
  };
  return (
    <div className="login">
      <h1 className='title'>
        Login
      </h1>
      <Banner image={imagemLogin}/>
      <Input
        type="email"
        name="email"
        placeholder="email"
        email={ email }
        onChange={ handleChange }
        required

      />

      <Input
        type="password"
        name="password"
        placeholder="senha"
        password={ password }
        onChange={ handleChange }
        required
      />

      <Button 
        disabled={ disabled }
        onClick={ handleClick }
      >
        Sign in
      </Button>
    </div>
  );
}

export default Login;