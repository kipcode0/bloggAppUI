import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import axios from 'axios';
import 'quill/dist/quill.snow.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ImageResize from 'quill-image-resize';
import { getAuthToken } from '../util/auth';
import './QuillEditor.css';

const QuillEditor = () => {
  const quillRef = useRef(null);
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    Quill.register('modules/imageResize', ImageResize);

    const quill = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],
          [{ header: [2, 3, 5, false] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }],
          ['link', 'image'],
          [{ color: [] }, { background: [] }],
          ['table'],
        ],
        imageResize: {},
      },
    });

    return () => {
      quill.destroy();
    };
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSubmit = () => {
    const editorTitle = extractTitle(quillRef.current);
    const editorText = quillRef.current.getText();
    saveContentToDatabase(editorTitle, editorText);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const extractTitle = (quillInstance) => {
    if (quillInstance && quillInstance.root) {
      const editorContent = quillInstance.root.innerHTML;
  
      // Assuming that the title is the first line of the editor
      const firstLine = editorContent.split('<')[0].trim();
  
      return firstLine;
    }
  
    return '';
  };
  

  const saveContentToDatabase = (title, text) => {
    const apiUrl = 'https://your-backend-api.com/save-content';

    const blog = {
      title: title,
      genre: 'Test',
      date: getCurrentDate(),
      content: text,
      writer: blogWriter(),
    };

    const token = getAuthToken();

    axios
      .post(apiUrl, blog, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        console.log('Content saved to database:', response.data);
        // If you want to show a success message without using toast, you can handle it here.
        // For example, you can set a state variable to display a success message on the UI.
      })
      .catch((error) => {
        console.error('Error saving content to database:', error);
        // Handle the error as needed
      });
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const blogWriter = () => {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('LastName');
    return `${firstName} ${lastName}`;
  };

  return (
    <div className={`quill-container ${isEditing ? 'editing' : ''}`}>
      <div ref={quillRef} className="quill-editor" />
      {isEditing && (
        <div className="edit-buttons">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      {!isEditing && (
        <div className="edit-icon" onClick={handleEdit}>
          <i className="fas fa-pencil-alt"></i>
        </div>
      )}
    </div>
  );
};

export default QuillEditor;
