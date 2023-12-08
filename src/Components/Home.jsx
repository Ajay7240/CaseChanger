import React, { useState } from "react";

function Home(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case.", "success");
  };

  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case.", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/ [ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed.", "success");
  };

  const handleCopy = () => {
    window.navigator.clipboard.writeText(text);
    props.showAlert("Text copied to Clipboard", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        {/* <h1
          className="d-flex justify-content-center rounded-5 py-2"
          style={{
            background: props.mode === "light" ? "#007BFF" : "#0098C4",
            color: "#FF5600",
            textShadow: "1px 1px black",
            marginBottom: "40px",
          }}
        >
          <strong>CASE CHANGER</strong>
        </h1> */}
        <h3 className="container mb-2 text-center">
          <strong>Welcome to the Convert Case Text Generator Tool </strong>
        </h3>
        <p className="container text-center">
          A very handy online text tool where you can change between lower case
          and upper case letters, where you can capitalize, uncapitalize, remove
          extra spaces and transform your text. Explore the options below:
        </p>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="7"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "light" ? "#ffffff" : "#5C5D5E",
              color: props.mode === "dark" ? "#ffffff" : "#000000",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "primary" : "info"
          } m-1`}
          disabled={text.length===0}
          onClick={handleUpClick}
        >
          Converted to UPPER CASE
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "primary" : "info"
          } m-1`}
          disabled={text.length===0}
          onClick={handlelowClick}
        >
          Converted to lower case
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "primary" : "info"
          } m-1`}
          disabled={text.length===0}
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "primary" : "info"
          } m-1`}
          disabled={text.length===0}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-outline-${
            props.mode === "light" ? "primary" : "info"
          } m-1`}
          disabled={text.length===0}
          onClick={handleClearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary :-</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters
        </p>
        <p>{0.0033 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes taken to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}

export default Home;
