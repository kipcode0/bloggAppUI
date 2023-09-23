import React from 'react'
import {getUserFirstName as firstName} from '../util/auth'

export default function MyBlogs(){
    return (
        <div>
            <h6>{firstName}</h6>
        </div>
    )
}