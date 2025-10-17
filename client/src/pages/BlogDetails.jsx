import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import Blog from '../pages/Blog';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center font-poppins">
        <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
      </div>
    );
  }

  const Icon = post.icon;

  const renderBlock = (block, idx) => {
    switch (block.type) {
      case 'h1':
        return <h1 key={idx} className="text-4xl font-bold mb-4 text-[#D81447]">{block.text}</h1>;
      case 'h2':
        return <h2 key={idx} className="text-3xl font-semibold mb-3 text-[#D81447]">{block.text}</h2>;
      case 'h3':
        return <h3 key={idx} className="text-2xl font-semibold mb-2 text-[#D81447]">{block.text}</h3>;
      case 'h4':
        return <h4 key={idx} className="text-xl font-semibold mb-2">{block.text}</h4>;
      case 'h5':
        return <h5 key={idx} className="text-lg font-semibold mb-2">{block.text}</h5>;
      case 'h6':
        return <h6 key={idx} className="text-base font-semibold mb-2">{block.text}</h6>;
      case 'p':
        return <p key={idx} className="text-gray-700 mb-4">{block.text}</p>;
      case 'ul':
        return (
          <ul key={idx} className="list-disc pl-6 mb-4 text-gray-700">
            {block.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            ))}
          </ul>
        );
      case 'ol':
        return (
          <ol key={idx} className="list-decimal pl-6 mb-4 text-gray-700">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-poppins mt-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 justify-center">
        <div className="bg-[#D81447] p-4 rounded-full text-white">
          <Icon className="text-4xl" />
        </div>
        <h1 className="text-3xl font-bold text-[#D81447]">{post.title}</h1>
      </div>

      {/* Content Centered + Justified */}
      <div className="max-w-3xl mx-auto text-gray-800 text-lg leading-relaxed ">
        {post.content.map((block, idx) => renderBlock(block, idx))}
      </div>

      {/* Related blog section */}
      <Blog />
    </div>
  );
}
