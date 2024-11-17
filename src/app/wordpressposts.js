"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function WordPressPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://gyc-gamified.mysites.io/wp-json/wp/v2/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Marketing
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}></span>
                  </a>
                </h3>
                <p
                  className="text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered,
                  }}></p>
                <a
                  className="text-gray-500"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer">
                  Read More
                </a>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Post ID:
                    </a>
                  </p>
                  <p className="text-gray-600">User ID: </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div>
  //       <h1 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
  //         WordPress Posts
  //       </h1>
  //       {posts.map((post) => (
  //         <div
  //           className="text-gray-900"
  //           key={post.id}
  //           style={{ marginBottom: "20px" }}>
  //           <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
  //           <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
  //           <a href={post.link} target="_blank" rel="noopener noreferrer">
  //             Read More
  //           </a>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default WordPressPosts;
