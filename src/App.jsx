import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Genre from './components/Genre'
import {url} from './components/url'
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'




export default function App() {
  const[loading,setLoading]=useState(true);
  const[movies,setMovies]=useState([]);

    useEffect(()=>{
    fetchData();
  },[])
    
  async function fetchData(){
    setLoading(true);
    try{
      const response=await fetch(url);
    const data=await response.json();
setMovies(data);
    }
    catch(error){
toast.error('Some Error Occured');
    }
    setLoading(false);
  }

  return (
    <div>
      <Header/>
      <Genre data={movies} />
      <Card />     
      <Footer/>
    </div>
  )
}
