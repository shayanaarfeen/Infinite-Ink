import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="w-full">
      <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
        <div className="w-full h-48">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">Read more...</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
