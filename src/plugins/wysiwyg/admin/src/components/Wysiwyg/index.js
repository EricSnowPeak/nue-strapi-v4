import React from "react";
import Editor from "../TinyMCE";

const Wysiwyg = ({ name, onChange, value }) => {
  return <Editor name={name} onChange={onChange} value={value} />;
};

export default Wysiwyg;
