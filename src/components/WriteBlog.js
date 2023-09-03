import React from 'react'
import {Form,json} from "react-router-dom";
import { getAuthToken } from '../util/auth';
import './WriteBlog.css'
export default function WriteBlog() {
  return (
    <div>
      <Form  method='post'>
         <section className='mainBlog'>
        <input type="text" 
            id="title" 
            required
            name="title" 
            placeholder="Enter Title"/>
        <textarea 
            id="content" 
            required
            name="content"
            placeholder="Write Blog">
        </textarea>
        <input id="submitBlogButton" 
            type="submit" 
            name="submitInfo" 
            value="SAVE"/>
        <input 
            id="cancelBlogButton" 
            type="cancel" 
            name="cancelInfo" 
            value="CANCEL"/>
        </section>
      </Form>
     
    </div>
  )
}
export async function action({request}){
    const token = getAuthToken();
    const data = await request.formData();
    const blog = {
        title: data.get('title'),
        genre: "Test",
        date: getCurrentDate(),
        content: data.get('content'),
        
    }
    function getCurrentDate(){
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
    
  const response = await fetch('http://localhost:8080/blogs/create-blog', {
     method: 'POST',
     headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
     },
     body: JSON.stringify(blog)
   });
   if(!response.ok){
    throw json({message: 'Could not create blog'}, {status:500});
   }
   return response;
}
