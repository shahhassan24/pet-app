/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import axios from "axios";
import toast from "react-hot-toast";

const AjaxCall = (type, api, params, is_cache, is_auth) => {
  console.log("this is data incoming", type, api, params, is_cache, is_auth);
  const token = window.localStorage.getItem("x-access-token");

  var ajaxPromise = new Promise(function (resolve, reject) {
    // if (is_auth) {
    //   const token = header
    // } else {
    //   headers = "";
    // }
    console.log("these header", token);

    //set api
    // var url = "https://ec2-54-211-21-110.compute-1.amazonaws.com/"
    // var url = "https://localhost:4000/" + api;

    var url = "http://139.59.77.50:4000/" + api;

    axios({
      method: type,
      url: url,
      data: params,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        console.log("this is reponse", response);
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);

        if (error.response) {
          console.log("Something went Wrong! Please try later", error.response);
          toast.error(error.response.data.message);
        } else {
          console.log("Something went Wrong! Please try later");
        }
      });
  });

  return ajaxPromise;
};

export default AjaxCall;
