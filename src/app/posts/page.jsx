import { getPosts } from "@/services/postApi";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "Posts page",
  keywords: ["posts", "blog", "blog posts"],
};

const PostPage = async () => {

  const postsData = await getPosts();

  // if(postsData){
  //   redirect(`/posts/${postsData[0].id}`)
  // }
  // console.log(postsData);
  return (
    <div>
      <h2>All Posts</h2>
      <div className="grid grid-cols-4 gap-6">
        {postsData?.slice(0, 20)?.map(({ id, title, body }) => (
          <div key={id} className="border-2 p-6">
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>
            <button className="mt-6 p-3 bg-violet-600">
              <Link href={`/posts/${id}`}>See Post</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
