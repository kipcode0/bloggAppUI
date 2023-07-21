import React from 'react'
import {Form,json} from "react-router-dom";

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
    const data = await request.formData();
    const blog = {
        title: data.get('title'),
        genre: "Test",
        date: "2020-10-10T00:00:00.000+00:00",
        content: data.get('content'),
        id: 1234,
    }

  const response = await fetch('http://localhost:8080/blogs/create-blog', {
     method: 'POST',
     headers:{
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(blog)
   });
   if(!response.ok){
    console.log(blog);
    throw json({message: 'Could not create blog'}, {status:500});
   }
}
