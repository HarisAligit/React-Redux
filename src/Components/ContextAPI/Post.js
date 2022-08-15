import { useContext } from 'react';
import {AppContext} from "../../Context/context";

const Post = ({ post }) => {
  const { dispatchUserEvent } = useContext(AppContext);

  const handleRemoveUser = () => {
    dispatchUserEvent('REMOVE_POST', { postId: post.id });
  };

  return (
    <div className="User">
      <div className="post-card" key={post.id}>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.body}</p>
        <div className="button">
          <div className="delete-btn">Delete</div>
        </div>
      </div>

      <button onClick={handleRemoveUser}>Delete Post</button>
    </div>
  );
};

export default Post;