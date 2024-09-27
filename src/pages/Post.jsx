import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        try {
          const fetchedPost = await appwriteService.getPost(slug);
          if (fetchedPost) {
            setPost(fetchedPost);
          } else {
            navigate("/");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };

    fetchPost();
  }, [slug, navigate]);

  const deletePost = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      const status = await appwriteService.deletePost(post.$id);
      if (status) {
        await appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    }
  };

  // Check if user is the author
  const isAuthor = post && userData ? post.userid === userData.$id : false;
  return post ? (
    <div className="py-8 bg-gray-100 min-h-screen">
      <Container>
        {/* Post Image */}

        <div className="w-full flex flex-col justify-center mb-6 relative border rounded-xl shadow-lg overflow-hidden">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-72 object-cover rounded-xl"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-2">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        {/* Post Title */}
        <h1 className="text-3xl font-bold text-center mb-4">{post.title}</h1>

        {/* Post Content */}
        <div className="browser-css text-gray-800 mb-6">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <p className="text-gray-500">Loading...</p>
    </div>
  );
}
