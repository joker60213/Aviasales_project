import React, { useEffect } from "react";

import logo from './logo.svg';
import {  useDispatch } from 'react-redux'



import { fetchTickets } from '../../api/cardApi'
import './App.scss';
import '../normalize.scss'
import Filter from '../filters';
import Toggle from "../toggle";
import CardList from "../cardList";



function  App () {

 
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])
 
  return(
  
    <div className="app">  
      <div className="app-wrapper">
        <div className="logo">
          <img  src={logo} alt="logo"></img>
        </div>
        <Filter />
        <Toggle />
        <CardList />
      </div>
    </div>
   
  )
};
 

export default App