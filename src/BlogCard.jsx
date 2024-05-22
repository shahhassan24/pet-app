import { Link } from "react-router-dom";

function BlogCard({ image, title, description, link }) {
  console.log("this is image", link);
  return (
    <>
      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <p>
            <img className="rounded-t-lg" src={image} alt="" />
          </p>
          <div className="p-5">
            <div>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {title}
              </h5>
            </div>
            <p className="font-normal text-gray-700 mb-3">{description} </p>
            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              to={link}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
