import React, { useEffect, useState } from "react";
import AjaxCall from "./ajax.service";
import toast from "react-hot-toast";
import BlogCard from "./BlogCard";
import BlogImage from "./assets/blog1.jpg";
const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    AjaxCall("GET", `api/blogs/all-blog`, {}, false, false)
      .then(function (response) {
        console.log("this is response form", response);
        setBlogs(response);
        toast.success(response.message);
      })
      .catch(function (err, response) {
        console.log("this is error message", err);

        console.log(err);
      });
  }, []);
  return (
    <div>
      {console.log("these are blgos", blogs)}
      <div className="flex  flex-wrap">
        {blogs.map((item, index) => (
          <BlogCard
            title={item.title}
            image={BlogImage}
            link={`/blog/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
