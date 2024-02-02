import React from 'react'
import { Button } from 'react-bootstrap'
import './MyBlogs.css'

export default function MyBlogs(){
    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("LastName")
    return (
        <div>
            <h2>Welcome to your account {firstName} {lastName}</h2>
            <hr class="hr hr-blurry" />
            <section>
                <l1 className="blogContainer">
                <h6>Machine Learning</h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit, sed do eiusmod tempor incididunt ut 
                  labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a. 
                  Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. 
                  Justo nec ultrices dui sapien eget mi. Et ligula ullamcorper 
                  malesuada proin libero nunc consequat. Non curabitur 
                  gravida arcu ac tortor dignissim. Et molestie ac feugiat sed 
                  lectus vestibulum mattis. Tempus imperdiet nulla malesuada pellentesque elit. 
                  Purus faucibus ornare suspendisse sed. Vitae tortor condimentum lacinia quis vel eros donec. Metus
                  </p>
                  <Button className='btnDelete'>Delete</Button>
                  <Button className='btnEdit'>Edit</Button>
                  
                </l1>
            </section>
        </div>
    )
}