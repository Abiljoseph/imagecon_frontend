import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pagination({ currentpage, totalpages, setComment }) {
  const [count, setCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/comments/all")
        .then((response) => {
          const data = response.data;
          setCount(data.length);
          setPageCount(data.length / 10);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleNextPage = () => {
    if (currentPage < count) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/comments/comments")
        .then((response) => {
          const data = response.data;
          console.log("Data:", data);
          setComment(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-between mt-4">
        <button
          className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <span className="text-2xl font-bold text-blue-900">
          Page {currentPage} of {pageCount}
        </span>
        <button
          className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
