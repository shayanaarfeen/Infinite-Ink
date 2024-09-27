import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function UserPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData); // Get logged-in user's data

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const posts = await appwriteService.getPosts(); // Fetch all posts
        if (posts && userData) {
          const filteredPosts = posts.documents.filter(
            (post) => post.userId === userData.$id // Filter posts by user ID
          );
          setUserPosts(filteredPosts);
        }
      } catch (error) {
        console.error("Error fetching user's posts:", error);
      }
    };

    if (userData) {
      fetchUserPosts(); // Fetch posts if user data is available
    }
  }, [userData]);

  return (
    <div className="w-full py-8 bg-gray-100">
      <Container>
        <h2 className="text-2xl font-bold mb-4">My Posts</h2>
        {userPosts.length === 0 ? (
          <p className="text-gray-500">You have not created any posts yet.</p>
        ) : (
          <div className="flex flex-wrap">
            {userPosts.map((post) => (
              <div key={post.$id} className="p-2 w-full md:w-1/3">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default UserPosts;
