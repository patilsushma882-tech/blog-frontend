import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { BlogCard } from "./BlogCard";
import { allPosts } from "../data/mockPosts";

export function BlogGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-black"></span>
          <h2 className="text-sm uppercase tracking-widest text-gray-500">Latest Articles</h2>
        </div>
        <Link to="/explore" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors duration-200 group">
          View all
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
        {["All", "AI", "Programming", "Design", "Lifestyle", "Startup", "Travel"].map((tab, idx) => (
          <button
            key={tab}
            className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 whitespace-nowrap ${
              idx === 0
                ? "bg-black text-white border-black"
                : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <Link to="/explore" className="flex items-center gap-2 border border-gray-200 text-gray-600 text-sm px-8 py-3 rounded-full hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200">
          Load More Articles
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}