import { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch posts on component mount
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts();
        if (response) {
          setPosts(response.documents); // Update state with fetched posts
        }
      } catch (error) {
        console.error("Error fetching posts:", error); // Error handling
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPosts(); // Call the fetch function
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading posts...</p>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post.$id} className="p-2 w-full md:w-1/3 lg:w-1/4">
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No posts available.</p>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;
