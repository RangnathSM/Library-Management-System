import '../Styles/readbook.css'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ReadBook = () => {
    let [book,setbook]=useState([])
    let params = useParams()
    useEffect(()=>{
        let fetchData= async() =>{
        let response =await fetch(`http://localhost:4005/books/${params.id}`)
        let data=await response.json()
        setbook(data)
        }
        fetchData()
    })
    return (  
        <div className="readbook">
            <h1>Read More</h1>
            <div className="card">
            <h1>{book.title}</h1>
            <p>Short Description: {book.shortDescription}</p>
            <p> Long Description: {book.longDescription}</p>
            </div>
        </div>
    );
}

export default ReadBook;