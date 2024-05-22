/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import AjaxCall from "./ajax.service";
import toast from "react-hot-toast";
const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("publish");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle adding a blog post
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Status:", status);

    const params = {
      title: title,
      content: content,
      status: status === "publish" ? true : false,
    };

    AjaxCall("POST", `api/blogs/addBlog`, params, false, false)
      .then(function (response) {
        console.log("this is response form", response);
        toast.success(response.message);
      })
      .catch(function (err, response) {
        console.log("this is error message", err);

        console.log(err);
      });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "",
          // height: "100vh",
        }}
      >
        <div style={{ width: "300px" }}>
          <form
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "20px",
            }}
            onSubmit={handleSubmit}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Add Blog</h2>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
                htmlFor="title"
              >
                Title:
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "14px",
                }}
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
                htmlFor="content"
              >
                Content:
              </label>
              <textarea
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  fontSize: "14px",
                  minHeight: "100px",
                }}
                id="content"
                value={content}
                onChange={handleContentChange}
                required
              ></textarea>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Status:
              </label>
              <div>
                <label style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    value="publish"
                    checked={status === "publish"}
                    onChange={handleStatusChange}
                  />
                  Publish
                </label>
                <label>
                  <input
                    type="radio"
                    value="unpublish"
                    checked={status === "unpublish"}
                    onChange={handleStatusChange}
                  />
                  Unpublish
                </label>
              </div>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  borderRadius: "4px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  cursor: "pointer",
                  border: "none",
                }}
                type="submit"
              >
                Add Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
