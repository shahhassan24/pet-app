// Blog.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AjaxCall from "./ajax.service";
import HeaderImage from "./assets/blog1.jpg";
import toast from "react-hot-toast";

const BlogPage = ({ title, content, isPublished, headerImage }) => {
  const [blog, setBlog] = useState({});
  let { id } = useParams();

  console.log("this is blog id", id);
  const handleAction = () => {
    alert("Delete this!");
  };

  useEffect(() => {
    AjaxCall("GET", `api/blogs/${id}`, {}, false, false)
      .then(function (response) {
        console.log("this is response form", response);
        setBlog(response);
        toast.success(response.message);
      })
      .catch(function (err, response) {
        console.log("this is error message", err);

        console.log(err);
      });
  }, []);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {console.log("this is blog to see", blog)}
      <div className="relative">
        <img
          src={HeaderImage}
          alt="Header"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-3 py-1 rounded-lg">
          <span
            className={`text-sm font-medium ${
              blog.published ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPublished ? "Published" : "Not Published"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="text-gray-700 leading-relaxed">{blog.content}</div>
      </div>

      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleAction}
      >
        Delete this Blog
      </button>
    </div>
  );
};

export default BlogPage;
