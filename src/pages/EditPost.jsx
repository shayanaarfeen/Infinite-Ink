import { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null); // Changed to singular 'setPost'
  const { slug } = useParams(); // Extract value from URL
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post); // Use setPost
          } else {
            navigate("/"); // Navigate if post not found
          }
        })
        .catch(() => {
          navigate("/"); // Handle potential errors
        });
    } else {
      navigate("/"); // Navigate if slug is not available
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8 bg-gray-200 min-h-screen">
      {" "}
      {/* Added background color and min height */}
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Post</h1>{" "}
        {/* Added a header */}
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div className="flex justify-center items-center min-h-screen">
      {" "}
      {/* Loading State */}
      <h2 className="text-xl">Loading...</h2>
    </div>
  );
}

export default EditPost;
