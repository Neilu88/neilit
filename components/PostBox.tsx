import { useForm } from "react-hook-form";

function PostBox() {
  return (
    <div className="sticky p-4 mt-4 bg-gray-800 max-w-5xl mx-auto rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-white font-semibold">Title</p>
        <input
          className="flex-1 p-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title"
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-white font-semibold">Body</p>
        <input
          className="flex-1 p-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter body"
        />
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-white font-semibold">Community</p>
        <input
          className="flex-1 p-2 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter community"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Upload Image
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Create Post
        </button>
      </div>
    </div>
  );
}

export default PostBox;
