import React, { useState, useEffect, useRef } from "react";
import {
  addPost,
  editPost,
  deletePostImage,
  deletePost,
} from "../features/postSlice";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

function PostForm({ editMode = false, currentpost, toggleEditMode }) {
  const [input, setInput] = useState(editMode ? currentpost.text : "");
  const [image, setImage] = useState(editMode ? currentpost.image : null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (editMode && currentpost) {
      setInput(currentpost.text);
      setImage(currentpost.image);
    }
  }, [editMode, currentpost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode && !input) {
      setError("Description is required.");
      return;
    }

    const Post = {
      text: input,
      id: editMode ? currentpost.id : Date.now(),
      image: image,
    };

    if (editMode) {
      dispatch(
        editPost({
          ...currentpost,
          text: input,
          image: image,
        })
      );
      toggleEditMode();
    } else {
      dispatch(addPost(Post));
    }
    setInput("");
    setImage(null);
    setError("");
  };

  const handleImageDelete = () => {
    dispatch(deletePostImage(currentpost.id));
    setImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handlePostDelete = () => {
    if (window.confirm("Are you sure you want to delete this to-do?")) {
      dispatch(deletePost(currentpost.id));
      toggleEditMode();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 rounded-lg w-1/2 h-36 flex flex-col justify-around">
          <div className="px-5 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a comment..."
              className="w-full h-12 min-h-12 max-h-12 outline-none"
            />
          </div>
          <div className="flex justify-between items-center px-5">
            <input
              type="file"
              ref={fileInputRef}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
              placeholder="Upload an image"
              className="block w-1/2 border border-gray-400 shadow-sm rounded-lg text-sm focus:z-10 focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-500 dark:text-black file:bg-gray-700 file:text-white file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-gray-600 dark:file:text-white cursor-pointer"
            />
            <div className="">
              {editMode && image && (
                <div>
                  <img src={image} alt="Post" style={{ width: "100px" }} />
                  <button type="button" onClick={handleImageDelete}>
                    Delete Image <FaTrash />
                  </button>
                </div>
              )}
           
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              {editMode ? "Update Post" : "Add Post"}
            </button>
            {editMode && (
              <button
                type="button"
                onClick={handlePostDelete}
                className="inline-flex items-center py-2.5 px-2 text-xs font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-red-900 hover:bg-red-800"
              >
                Delete Post
              </button>
            )}
             </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PostForm;
