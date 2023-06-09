import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './TinyEditor.css';


const handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }
export default function TinyEditor(){
    return (
        <div>
        <Editor apiKey='hhhyk51sk5pvz02mzo9i4s5xo6p9c0g64jasjjne5k64wwjc'
          initialValue="<p>This is the initial content of the editor</p>"
          init={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={handleEditorChange}
        />
        </div>
      );
      
}
