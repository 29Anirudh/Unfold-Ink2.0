import React from "react";
import BlogEditor from "./BlogEditor";
import NavBar from "./NavBar";

const CreateBlogPage = ({user}) => {
  return (
    <>
      <NavBar user={user}/>
      <div className="mt-20 px-6">
        <BlogEditor />
      </div>
    </>
  );
};

export default CreateBlogPage;