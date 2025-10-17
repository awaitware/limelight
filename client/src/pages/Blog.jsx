import React, { useEffect } from 'react';
import { blogPosts } from "../data/blogData";

export default function Blog() {
   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-poppins mt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#D81447] mb-2">Our Blog</h1>
        <p className="text-gray-600 text-lg">Explore our insights & services.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const Icon = post.icon;

          // If content is an array (structured), get the first paragraph/text
          let previewText = "";
          if (Array.isArray(post.content)) {
            const firstParagraph = post.content.find(
              (block) => block.type === "p"
            );
            previewText = firstParagraph ? firstParagraph.text.slice(0, 90) + "..." : "";
          } else if (typeof post.content === "string") {
            previewText = post.content.slice(0, 90) + "...";
          }

          return (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden min-h-[320px] flex flex-col justify-between"
            >
              {/* Thumbnail */}
              <div className="bg-[#D81447] py-10 flex items-center justify-center">
                <Icon className="text-white text-5xl" />
              </div>

              {/* Content */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <h2 className="text-xl font-semibold text-[#D81447] mb-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">{previewText}</p>

                <a
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#D81447] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#ba0f31] transition self-start"
                >
                  Read more &rarr;
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
