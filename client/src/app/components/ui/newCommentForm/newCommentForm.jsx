import React, { useState } from "react";
import TextAreaField from "../../common/form/textAreaField";

const NewCommentForm = () => {
  const [data, setData] = useState("");
  const [error] = useState(null);

  const handleChange = ({ value }) => {
    setData(value);
  };

  return (
    <div className="newCommentForm">
      <TextAreaField
        label="Ваш комментарий"
        name="comments"
        rows="3"
        value={data}
        error={error}
        onChange={handleChange}
      />
    </div>
  );
};

export default NewCommentForm;
