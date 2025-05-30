import React from "react";
import BlogEditor from "./BlogEditor";

const CreateBlogPage = ({user}) => {
  return (
    <>
      <div className="mt-20 px-6">
        <BlogEditor />
      </div>
    </>
  );
};

export default CreateBlogPage;