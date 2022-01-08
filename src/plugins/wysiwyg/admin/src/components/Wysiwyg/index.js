import React, { useState } from "react";
// import { isEmpty } from "lodash";
import Editor from "../TinyMCE";

const Wysiwyg = ({
  inputDescription,
  errors,
  label,
  name,
  noErrorsDescription,
  onChange,
  value,
}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // let spacer = !isEmpty(inputDescription) ? (
  //   <div style={{ height: ".4rem" }} />
  // ) : (
  //   <div />
  // );

  // if (!noErrorsDescription && !isEmpty(errors)) {
  //   spacer = <div />;
  // }

  // const handleChange = (data) => {
  // if (data.mime.includes("image")) {
  //   const imgTag = `<p><img src="${data.url}" caption="${data.caption}" alt="${data.alternativeText}"></img></p>`;
  //   const newValue = value ? `${value}${imgTag}` : imgTag;
  //   onChange({ target: { name, value: newValue } });
  // }
  // Handle videos and other type of files by adding some code
  // };

  // const handleToggle = () => setIsOpen((prev) => !prev);

  return <Editor name={name} onChange={onChange} value={value} />;
};

// Wysiwyg.defaultProps = {
//   errors: [],
//   inputDescription: null,
//   label: "",
//   noErrorsDescription: false,
//   value: "",
// };

// Wysiwyg.propTypes = {
//   errors: PropTypes.array,
//   inputDescription: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.func,
//     PropTypes.shape({
//       id: PropTypes.string,
//       params: PropTypes.object,
//     }),
//   ]),
//   label: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.func,
//     PropTypes.shape({
//       id: PropTypes.string,
//       params: PropTypes.object,
//     }),
//   ]),
//   name: PropTypes.string.isRequired,
//   noErrorsDescription: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string,
// };

export default Wysiwyg;
