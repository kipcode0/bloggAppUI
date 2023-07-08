import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './TinyEditor.css';

const blogContent = [];
const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
    blogContent.push(e.target.getContent());
    console.log('FROM ARRAY:',blogContent)
  }
  
export default function TinyEditor(){
    return (
        <div>
        <Editor apiKey='hhhyk51sk5pvz02mzo9i4s5xo6p9c0g64jasjjne5k64wwjc'
          //initialValue="<p>This is the initial content of the editor</p>"
          init={{
            selector: 'textarea',  // change this value according to your HTML
            menubar: 'edit insert format',
            //link,image, code
            //plugins: '',
          
      
          }}
          onChange={handleEditorChange}
        />
        </div>
      );
      
}
