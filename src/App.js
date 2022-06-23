import React from "react";
import QuillsEditor from "./component/QuillsEditor"

export default function App() {
  return (
    <div className="row w-100 p-3 h-100">
      <div
        className="row  w-100 h-100"
        style={{ borderTop: " 2px solid black", padding: "1vh" }}
      >
        {/* sidebar */}
        <div className="col-2" style={{ borderRight: " 2px solid gray" }}>
          col
        </div>
        {/* sidebar */}

        {/* main content */}
        <div className="col-9">
          {/* heading of main content */}
          <div className="clearfix">
            <span className="float-start">
              <b>Summary</b>
            </span>
            <span className="float-end">Suggested : 300 characters</span>
          </div>
          {/* heading of main content */}

          {/* UPload cover */}
          <div
            style={{ marginLeft: "6vh", marginTop: "18vh" }}
            className="d-flex flex-column  align-items-center border border-dark"
          >
            <div className="m-3">
              <img
                style={{ width: "4vh" }}
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                alt="/"
              />
            </div>
            <div className="m-3" style={{ color: "gray" }}>
              Upload a Cover Image
            </div>
            <div className="m-3">
              <button className="btn btn-outline-danger ">Choose a file</button>
            </div>
          </div>
          {/* UPload cover */}



           {/* The main text and image content added here only */}
          <QuillsEditor></QuillsEditor>
        {/* The main text and image content added here only */}

        
        </div>
        {/* main content */}


       
      </div>
    </div>
  );
}
