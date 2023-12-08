import React from "react";

function About(props) {
  return (
    <div className="container my-4">
      <h1 className="my-3">About Us</h1>
      <p className="container">
        This easy-to-use Case Changer Tool is designed to allow you to convert
        blocks of text into any case, which you can then export to a text file
        or simply copy and paste back to your own document. So if you have typed
        a document and accidentally left your caps lock on – don’t panic! Or if
        you want to make sure that a document has all the right capitalisations,
        you can now convert it in seconds. Or if you are a marketer and want to
        capitalise the first letter of each word, then one click will do the
        trick!
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#0098C4",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              <strong>1. UPPER CASE </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#022C44",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              The upper case transformer will take any text that you have and
              will generate all the letters into upper case ones. It will
              essentially make all lower case letters into CAPITALS (as well as
              keep upper case letters as upper case letters). To do this, you
              simply have to select the text that you need changing and pasting
              into the box above and then select the{" "}
              <strong> Convert to UPPER CASE</strong> tab.
              <p className="my-1">THIS IS AN EXAMPLE OF UPPER CASE.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#0098C4",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              <strong>2. lower case </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#022C44",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              If you are wondering how to uncapitalize text, this is exactly
              what the lower case text converter will allow you to do - it
              transforms all the letters in your text into lowercase letters.
              Simply copy the text that you need generating into lower case and
              paste the text into the box above and select the{" "}
              <strong>Convert to lower case </strong> lower case tab.
              <p className="my-1">this is an example of lower case.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#0098C4",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              <strong>3. Remove Extra Spaces </strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                background: props.mode === "light" ? "#ffffff" : "#022C44",
                color: props.mode === "dark" ? "#ffffff" : "#000000",
              }}
            >
              Use this free tool to remove extra spaces or tab spaces from your
              text content. It replaces multiple spaces in your text with a
              single whitespace. It can also delete all tab spaces if you need
              that option instead of replacing them with a single space by
              default. This tool will trim all unnecesary whitespace from your
              content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
