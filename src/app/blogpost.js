import React from "react";
function BlogPost(props) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
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
          <a href="#">
            <span className="absolute inset-0"></span>
            {props.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
          {props.desc}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img
          src={props.img}
          alt=""
          className="size-10 rounded-full bg-gray-50"
        />
        <div className="text-sm/6">
          <p className="font-semibold text-gray-900">
            <a href="#">
              <span className="absolute inset-0"></span>
              Post ID: {props.num}
            </a>
          </p>
          <p className="text-gray-600">User ID: {props.userid}</p>
        </div>
      </div>
    </article>
  );
}

export default BlogPost;
