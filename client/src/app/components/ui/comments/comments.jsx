import React from "react";
import CommentsList from "../commenstList/commentsList";
import NewCommentForm from "../newCommentForm/newCommentForm";

const Comments = () => {
  return (
    <div className="comments">
      <CommentsList />
      <NewCommentForm />
    </div>
  );
};

export default Comments;
