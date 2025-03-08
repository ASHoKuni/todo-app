import React from "react";

interface FilterProps {
  setFilter: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ setFilter }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      <button onClick={() => setFilter("all")} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
        All
      </button>
      <button onClick={() => setFilter("completed")} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Completed
      </button>
      <button onClick={() => setFilter("pending")} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
        Pending
      </button>
    </div>
  );
};

export default Filter;
