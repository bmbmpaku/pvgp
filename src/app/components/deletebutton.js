// "use client";
import React from "react";
import { db } from "@/utils/db";

export default function DeleteButton({ voiceId, refreshData }) {
  const handleDelete = async () => {
    try {
      // Deleting the voice post by ID
      await db.query(`DELETE FROM voices WHERE voice_id = $1`, [voiceId]);
      console.log(`Post with ID ${voiceId} deleted successfully.`);

      // Refresh the data to reflect changes
      if (refreshData) refreshData();
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  };

  //   const handleDelete = async () => {
  //     try {
  //       const response = await fetch("/api/deletePost.js", {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ voiceId }),
  //       });

  //       if (response.ok) {
  //         console.log(`Post with ID ${voiceId} deleted successfully.`);
  //         if (refreshData) refreshData();
  //       } else {
  //         console.error("Failed to delete the post");
  //       }
  //     } catch (error) {
  //       console.error("Error deleting post:", error);
  //     }
  //   };

  return (
    <button
      action={handleDelete()}
      className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600"
    >
      Delete
    </button>
  );
}
