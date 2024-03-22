import React, { useEffect, useState } from "react";

export default function Header() {
  const [searchComment, setSearchComment] = useState("");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setSearchComment({ ...searchComment, searchTerm: e.target.value });
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1684487747385-442d674962f2) no-repeat center",
          backgroundSize: "cover",
        }}
        class="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto"
      >
        <h1 class="pb-4">Search for comment</h1>
        <div class="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
          <div class="relative z-30 text-base text-black">
            <input
              type="text"
              id="searchTerm"
              placeholder="Keyword"
              class="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full"
              onChange={(e) => handleChange(e)}
            />
            <div class="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto"></div>
          </div>
          <div className="mt-10">
            <button
              onClick={openModal}
              className="p-2 bg-green-700 text-black border rounded"
            >
              New Comment
            </button>
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white text-black p-4 rounded-md">
                  <h1>add a new comment</h1>
                  <form>
                    <div>
                      <label>Name</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e.target.value)}
                      />
                      <label>comment</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e.target.value)}
                      />
                    </div>
                  </form>
                  <button onClick={closeModal}>Close Modal</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
