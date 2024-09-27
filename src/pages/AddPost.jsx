
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 bg-gray-200 min-h-screen">
      {" "}
      <Container>
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Post</h1>{" "}
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;


