import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css'
import { Description } from '@mui/icons-material';
Modal.setAppElement('#root'); 

function CreatePostModal({ isOpen, onRequestClose, createPost }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    createPost({ title, body, imageUrl });
    onRequestClose();
  };

  const modalStyle = {
    content: {
      background:  '#1d1d1d',
      border: 'none',
      maxWidth: '800px', 
      margin: 'auto',
      height: '500px',
      width:'600px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '15px',
      padding: '20px',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)', 
    },
  };

  const inputStyle = {
    backgroundColor: '#333131', 
    color: 'white', 
    border: '1px solid white', 
    borderRadius: '8px', 
    width: '500px',
   height: '200px',
    marginBottom: '15px',
  };

  const labelStyle = {
    color: 'white',
    marginBottom: '5px',
  };

  const buttonStyle1 = {
    backgroundColor: '#1a62e3', 
    color: '#fff',
    width: '200px',
    height:'30px',
    border: 'none',
    borderRadius: '45px',
  };
  const buttonStyle2 = {
    backgroundColor: '#1a62e3', 
    color: '#fff',
    width: '80px',
    height:'30px',
    border: 'none',
    borderRadius: '45px',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={modalStyle}
      contentLabel="Create Post Modal"
    >
      <h3 style={{Top:0 ,textAlign:"center", width:"100%",color: '#fff', borderBottom: '1px solid gray', paddingBottom: '10px' }}>Create New Post</h3>
      <div style={{ marginBottom: '15px' }}>
        <label style={labelStyle}>Description</label>
        <br/>
        <input
          type="text"
          value={Description}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
      </div>
      <br/>
      <br/>
      <button style={buttonStyle1} onClick={handleSubmit}>
        Choose Image
      </button>
      
<br/>
<br/>
<br/>
      <button style={buttonStyle2} onClick={handleSubmit}>
        Post
      </button>
    </Modal>
  );
}

export default CreatePostModal;