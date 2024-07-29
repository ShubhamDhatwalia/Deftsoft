import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "./PostForm";
import { deletePost } from "../features/postSlice";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

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
        <div className="mt-10">
          <PostForm
            editMode={editMode}
            currentpost={currentpost}
            toggleEditMode={toggleEditMode}
          />
        </div>
      ) : (
        <div className="mt-10">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <div className="rounded overflow-hidden border border-gray-300 w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0 my-5">
                  <div className="w-full flex justify-between p-3">
                    <div className="flex justify-between items-center w-full">
                        <p>Title</p>

                      <div className="flex gap-3 text-sm">
                        <button onClick={() => handleEdit(post)}>
                          <FaEdit />
                        </button>
                        <button onClick={() => handleDelete(post.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    {post.text}
                    {post.image && (
                      <img
                        className="bg-cover rounded-sm"
                        src={post.image}
                        alt="post"
                      />
                    )}
                  </div>
                <p className="text-sm text-end pr-3 text-gray-600">12:00</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostList;
