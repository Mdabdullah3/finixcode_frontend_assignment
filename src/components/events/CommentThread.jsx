"use client";
import React from "react";
import { FaRegClock } from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { Input } from "../ui/input";

const CommentThread = () => {
  const comments = [
    {
      id: 1,
      avatar: "AM",
      name: "Alex Mercer",
      time: "14 min",
      content: "Looking forward to the game! What's the final player count?",
      isPrimary: true,
      replies: [
        {
          id: 2,
          avatar: "RK",
          name: "Rifat Khan",
          time: "14 min",
          content: "missing few players",
          isPrimary: false,
        },
        {
          id: 3,
          avatar: "RK",
          name: "Rifat Khan",
          time: "14 min",
          content: "got any friends?",
          isPrimary: false,
        },
      ],
    },
    {
      id: 4,
      avatar: "AM",
      name: "Alex Mercer",
      time: "14 min",
      content: "Looking forward to the game! What's the final player count?",
      isPrimary: true,
    },
    {
      id: 5,
      avatar: "AM",
      name: "Alex Mercer",
      time: "14 min",
      content: "Looking forward to the game! What's the final player count?",
      isPrimary: true,
      replies: [
        {
          id: 6,
          avatar: "RK",
          name: "Rifat Khan",
          time: "14 min",
          content: "got any friends?",
          isPrimary: false,
        },
      ],
    },
  ];

  return (
    <section className="bg-white rounded-3xl  w-full my-10 p-5">
      <div className=" space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="mt-10">
        <Input
          placeholder="Add a comment..."
          className="rounded-full py-2 border-[#E5E5E5]"
        />
      </div>
    </section>
  );
};

const CommentItem = ({ comment }) => {
  return (
    <div className="space-y-4">
      <div
        className={`p-5 rounded-2xl ${
          comment.isPrimary ? "bg-[#34735F]" : "bg-orange-100"
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold 
              ${
                comment.isPrimary
                  ? "bg-orange-100 text-[#34735F]"
                  : "bg-[#34735F] text-orange-100"
              }`}
            >
              {comment.avatar}
            </div>
            <h3
              className={`text-xl font-medium ${
                comment.isPrimary ? "text-orange-100" : "text-[#34735F]"
              }`}
            >
              {comment.name}
            </h3>
          </div>
          <div
            className={`flex items-center gap-2 ${
              comment.isPrimary ? "text-orange-100" : "text-[#34735F]"
            }`}
          >
            <span>{comment.time}</span>
            <FaRegClock className="text-lg" />
          </div>
        </div>
        <p
          className={`mt-3 text-lg ${
            comment.isPrimary ? "text-white" : "text-neutral-900"
          }`}
        >
          {comment.content}
        </p>
      </div>
      {comment.isPrimary && (
        <button className="flex items-center gap-2 mt-4 text-zinc-400 hover:text-zinc-300">
          <BsArrowReturnRight className="text-xl" />
          <span>Reply</span>
        </button>
      )}
      {comment.replies && (
        <div className="pl-8 border-l-2 border-dashed border-gray-300 space-y-3">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentThread;
