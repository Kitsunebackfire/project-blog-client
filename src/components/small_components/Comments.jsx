import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
  let { id } = useParams();

  async function fetchComments() {
    const response = await fetch(
      `http://localhost:3001/api/posts/${id}/comments`
    );
    const commentRes = await response.json();
    setComments(commentRes.comments);
    //setComments(co.post);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h1
        onClick={() => {
          console.log(comments);
        }}
      >
        comment section
      </h1>
      {comments &&
        comments.map((comment) => (
          <div key={comment._id} className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-base">{comment.author.username}</div>
              <div className="text-xs md:mr-2">timestamp</div>
            </div>
            <p className="text-xs mt-3">{comment.comment}</p>
          </div>
        ))}
    </div>
  );
};

export default Comments;

/*

{comments &&
        comments.map((comment) => (
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="text-base">{comment.author.username}</div>
              <div className="text-xs md:mr-2">timestamp</div>
            </div>
            <p className="text-xs mt-3">{comment.comment}</p>
          </div>
        ))}


*/
