"use client";

import { useEffect, useState } from "react";
import { Modal } from "./Modal"

type Post = {
    Message: string
    Timestamp: Date
}

type ResObj = {
    Status: string
    Message: string
    Data: Post[]
}

const url = process.env.NEXT_PUBLIC_URL

const formatDt = (dt: Date): string => {
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
  const date = dt.getDate();
  const hours = dt.getHours();
  const minutes = dt.getMinutes();
  
  const formattedDateTime = `${year}/${month < 10 ? '0' + month : month}/${date < 10 ? '0' + date : date} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  return formattedDateTime
}

const getPosts = async () => {
    const res = await fetch(`${url}/post`)
    const resObj: ResObj = await res.json()

    return resObj.Data
}

const submitPost = async (message: string) => {
    const data = {
        message: message
    }

    const res = await fetch(`${url}/post`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // Convert the object to JSON string
    })

    const resObj = await res.json()
    
    return resObj
}

const PostCards = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const openModal: () => void = () => setShowModal(true)
  const closeModal: () => void = () => setShowModal(false)

  const fetchPosts = () => getPosts()
    .then(resultPosts => setPosts(resultPosts))
    .catch(err => {
        console.log(err)
        setPosts([])
    })

  const handleModalSubmit = async (postContent: string) => {
    await submitPost(postContent) 
    closeModal()
    fetchPosts()
  }

  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-y-auto h-5/6 w-1/3">
        {posts.map((post, i) => (
          <div className="mb-10 w-full" key={i}>
            <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {formatDt(new Date(post.Timestamp))}
              </h5>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {"Anonymous"}
              </span>
              <p className="font-normal text-gray-700">{post.Message}</p>
            </a>
          </div>
        ))}
      </div>

      <button className="ml-20 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 3v5h5M12 18v-6M9 15h6" />
        </svg>
        <span className="ml-2">Add a Post</span>
      </button>

      {showModal && <Modal handleModalSubmit={handleModalSubmit} closeModal={closeModal}></Modal>}
    </div>
  );
};

export { PostCards };
