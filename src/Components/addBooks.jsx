import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/addBooks.css'
const AddBook = () => {
    let[title,setTitle] = useState("")
    let[authors,setAuthors] = useState("")
    let[categories,setCategories] = useState("")
    let[pageCount,setPageCount] = useState("")
    let[shortDescription,setShortdescription] = useState("")
    let[longDescription,setLongdescription] = useState("")
    let[thumbnailUrl,setThumbnailurl] = useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
         e.preventDefault();
         //data to be posted
         let bookdata = {title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

         //posting to server
         fetch('http://localhost:4005/books',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(bookdata)
         })
         alert(`Book Added Successfully`)
         navigate('/admin/bookList')
    }
    // title,authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl
    return ( 
        <div className="frames">
            <div className="addBook">
            <h1 className='Add'>Add a Book</h1>
            <div className="addform">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor="">Title</label>
                        <input type="text" value={title} required placeholder="title of the book" onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className="authors">
                        <label htmlFor="">Authors</label>
                        <input type="text" value={authors} required placeholder="authors of the book" onChange={(e)=>setAuthors(e.target.value)} />
                    </div>
                    <div className="categories">
                        <label htmlFor="Categories">Categories</label>
                        <input type="text" value={categories} required placeholder="categoties of the book" onChange={(e)=>setCategories(e.target.value)} />
                    </div>
                    <div className="pageCount">
                        <label htmlFor="">Page Count</label>
                        <input type="text" value={pageCount} required placeholder="Page Count of the book" onChange={(e)=>setPageCount(e.target.value)} />
                    </div>
                    <div className="shortDescription">
                        <label htmlFor="">Short Description</label>
                        <textarea value={shortDescription}  cols="30" rows="10" onChange={(e)=>setShortdescription(e.target.value)}></textarea>
                    </div>
                    <div className="longDescription">
                        <label htmlFor="">Long Description</label>
                    <textarea value={longDescription}  cols="30" rows="10" onChange={(e)=>setLongdescription(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <label htmlFor="">Image</label>
                        <input  value={thumbnailUrl} required placeholder="image of the book" onChange={(e)=>setThumbnailurl(e.target.value)} />
                    </div>
                    <button className="Addbook">Add Book</button>   
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default AddBook;