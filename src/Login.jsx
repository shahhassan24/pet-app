/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import AjaxCall from "./ajax.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic to handle login, like sending a request to your backend
    console.log("Email:", email);
    console.log("Password:", password);

    const params = {
      email: email,
      password: password,
    };

    AjaxCall("POST", `api/user_auth/login`, params, false, false)
      .then(function (response) {
        console.log("this is response form", response);
        if (response.error_code === 0) {
          toast.success(response.message);
          localStorage.setItem(
            "x-access-token",
            "Bearer " + response.data.token
          );
          navigate("/add-blog");
        } else {
          toast.error(response.message);
        }
      })
      .catch(function (err, response) {
        console.log("this is error message", err);
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-72">
          <form
            className="bg-white shadow-lg rounded-lg p-5"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl mb-5">Login</h2>
            <div className="mb-5">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div>
              <button
                className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
