import React from "react";
import PostForm from "../Post/PostForm";
import PostList from "../Post/PostList";

function Dashboard() {
  return (
    <div>
      <PostForm/>
      <PostList/>
    </div>
  );
}

export default Dashboard;
