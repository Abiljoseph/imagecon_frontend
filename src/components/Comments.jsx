import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

export default function () {
  const [comment, SetComment] = useState([]);
  const [count, setCount] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/comments")
        .then((response) => {
          const data = response.data;
          console.log("Data:", data);
          SetComment(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // axios
    //   .get("http://localhost:5000/api/comments")
    //   .then((response) => {
    //     console.log("Response data:", response);
    //     const data = response.data;
    //     SetComment(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, []);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/api/comments/all")
        .then((response) => {
          const data = response.data;
          console.log("Data:", data);
          setCount(data.count);
          setTotalPages(count / 10);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = axios.delete(
        `http://localhost:5000/api/comments/delete/${id}`
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div>
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Post Id
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {comment.map((comment) => (
            <>
              <tr key={comment._id}>
                <td class="px-6 py-4 whitespace-nowrap">{comment.postId}</td>
                <td class="px-6 py-4 whitespace-nowrap">{comment.email}</td>
                <td class="px-6 py-4 whitespace-nowrap">{comment.name}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <button
                    type="button"
                    onClick={() => handleDelete(comment._id)}
                    class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                  >
                    Edit
                  </button>
                  <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <div className="m-5">
        <Pagination
          currentpage={currentPage}
          totalpages={totalPages}
          SetComment
        />
      </div>
    </div>
  );
}
