import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "./PostForm";
import { deletePost } from "../features/postSlice";

function PostList() {
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [currentpost, setCurrentpost] = useState(null);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleEdit = (post) => {
    setCurrentpost(post);
    setEditMode(true);
  };

  const toggleEditMode = () => {
    setEditMode(false);
    setCurrentpost(null);
  };

  return (
    <div>
      {editMode ? (
        <PostForm
          editMode={editMode}
          currentpost={currentpost}
          toggleEditMode={toggleEditMode}
        />
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
                <div className="w-full flex justify-between p-3">
                  <div className="flex">
                    <div>
                      <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&s"
                          alt="user_profile"
                        />
                      </div>
                      <span className="pt-1 ml-2 font-bold text-sm">User</span>
                    </div>
                    <span>12:00</span>
                  </div>
                </div>
                <div className="p-6">
                  {post.text}
                  {post.image && (
                    <img
                      className="w-full bg-cover rounded-sm"
                      src={post.image}
                      alt="post"
                    />
                  )}
                </div>
                <button onClick={() => handleEdit(post)}>Edit</button>
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
