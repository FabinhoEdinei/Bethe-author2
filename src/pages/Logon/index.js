import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from "react-icons/fi";

import './styles.css';

import logoImg from '../../assets/logo.svg';
import  heroesImg from '../../assets/heroes.png';
export default function Logon(){
return (

<div className="Logon-container">

  
  
<section className="form">
  <form>
        
        <h1> Faça seu Logon</h1>

          <input placeholder="Sua ID"/>

          <button type="submit">Entrar</button>

          <Link to="/register">

          <FiLogIn size={16} color="#E02041"/>

          Não tenho cadastro

          </Link>

  </form>


</section>
          <img src={heroesImg} alt="Heroes"/>

 
  </div>


);
}