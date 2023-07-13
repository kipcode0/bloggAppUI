import React from 'react'
import './WriteBlog.css'
export default function WriteBlog() {
  return (
    <div>
      <form action="/form/submit" method="#">
         <section className='mainBlog'>
        <input type="text" id="title" name="fname" placeholder="Enter Title"/>
        <textarea id="content" placeholder="Write Blog"></textarea>
        <input id="submitBlogButton" type="submit" name="submitInfo" value="Submit"/>
        <input id="cancelBlogButton" type="cancel" name="cancelInfo" value="Cancel"/>
        </section>
      </form>
     
    </div>
  )
}
