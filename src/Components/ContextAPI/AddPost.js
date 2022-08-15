import React, { useContext, useState } from 'react';
import {AppContext} from "../../Context/context";

const AddPost = () => {
  const { limit, dispatchUserEvent } = useContext(AppContext);
  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ number, setNumber ] = useState(0);

  const handleAddPost = () => {
    const newLimit = limit + 1;
    const post = { userId: 2, id: newLimit, title, body };
    dispatchUserEvent('ADD_POST', { newPost: post, newLimit: newLimit });
  };

  return (
    <div>
      <h3>Add New User</h3>
      <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}placeholder="number"/>
      <br />
			<input type="text" value={title} onChange={e => {setTitle(e.target.value)}} placeholder="title"/>
			<br />
			<textarea type="text" value={body} onChange={e => {setBody(e.target.value)}} placeholder="body"/>
			<br />
			<button onClick={handleAddPost}>Add Post</button>
		</div>
	);
};

export default AddPost;