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
    <div>
      <h1 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
        WordPress Posts
      </h1>
      {posts.map((post) => (
        <div
          className="text-gray-900"
          key={post.id}
          style={{ marginBottom: "20px" }}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h2>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default WordPressPosts;
