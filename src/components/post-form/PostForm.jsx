import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from ".."; // Assuming RTE is not being used currently
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const [loading, setLoading] = useState(false); // State for loading
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    setLoading(true); // Start loading

    try {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (post) {
        if (file) appwriteService.deleteFile(post.featuredImage); // Delete old image if new one is uploaded

        const dbPost = await appwriteService.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      } else {
        const newFileId = file ? file.$id : undefined;
        const dbPost = await appwriteService.createPost({
          ...data,
          featuredImage: newFileId,
          userid: userData.$id,
        });

        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    } catch (error) {
      console.error("Error submitting post:", error);
      // Add additional error handling here (e.g., show a toast or notification)
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const slugTransform = useCallback((value) => {
    return value
      ? value
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z\d\s]+/g, "-")
          .replace(/\s/g, "-")
      : "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-full md:w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
      </div>
      <div className="w-full md:w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
          disabled={loading} // Disable button while loading
        >
          {loading ? "Submitting..." : post ? "Update" : "Submit"}
        </Button>
      </div>
      <div className="px-2 w-full">
        <label htmlFor="content" className="block mb-2">
          Content:
        </label>
        <textarea
          id="content"
          placeholder="Write Content..."
          className="h-[400px] w-full rounded-md border p-2"
          {...register("content", { required: true })}
        />
      </div>
    </form>
  );
}
