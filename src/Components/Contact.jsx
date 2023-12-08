import React from "react";

function Contact(props) {
  return (
    <div className="contact container">
      <h1 className="my-3">Contact Us</h1>
      <p>
        If you have any questions or need help with anything, please don't
        hesitate to contact us. We are here to assist you!
      </p>
      <div className="d-flex justify-content-center my-4">
        <form action="#" method="post">
          <label htmlFor="name">
            {" "}
            <strong>Name:</strong>{" "}
          </label>
          <br />
          <input
            type="text"
            name="name"
            className="my-1 rounded"
            id="name"
            style={{
              background: props.mode === "light" ? "#ffffff" : "#8D8E83",
              color: props.mode === "dark" ? "#ffffff" : "#000000",
            }}
          />
          <br />
          <label htmlFor="email">
            {" "}
            <strong>Email: </strong>{" "}
          </label>
          <br />
          <input
            type="text"
            name="email"
            className="my-1 rounded"
            id="email"
            style={{
              background: props.mode === "light" ? "#ffffff" : "#8D8E83",
              color: props.mode === "dark" ? "#ffffff" : "#000000",
            }}
          />
          <br />
          <label htmlFor="message">
            {" "}
            <strong>Message: </strong>{" "}
          </label>
          <br />
          <textarea
            rows="5"
            cols="30"
            name="message"
            className="my-1 rounded"
            id="message"
            style={{
              background: props.mode === "light" ? "#ffffff" : "#8D8E83",
              color: props.mode === "dark" ? "#ffffff" : "#000000",
            }}
          ></textarea>
          <br />
          <button
            type="submit"
            className={`btn btn-outline-${
              props.mode === "light" ? "primary" : "info"
            } mx-5 my-2`}
          >
            <strong>Send Message</strong>
          </button>
        </form>
      </div>

      <div className="footer container d-flex justify-content-center">
        <p>Copyright &copy; 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
