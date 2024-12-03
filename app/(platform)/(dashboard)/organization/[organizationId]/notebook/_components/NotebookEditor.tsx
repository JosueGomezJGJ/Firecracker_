"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NotebookEditor = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "link",
    "image",
  ];

  return (
    <div
      className="bg-white rounded-md shadow-md border p-4"
      style={{ maxWidth: "800px", height: "400px", overflow: "hidden" }}
    >
      <div
        style={{
          height: "calc(100% - 50px)", // Leave space for a save button at the bottom
          overflowY: "auto",
          padding: "10px",
          border: "1px solid #e5e7eb",
          borderRadius: "5px",
        }}
      >
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          style={{ height: "100%" }}
        />
      </div>
      <div
        className="mt-2 text-right"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button
          className="px-2 py-1 bg-[#e41c4b] text-white rounded hover:bg-[#b0153a] "
          onClick={() => console.log("Saved Content:", content)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NotebookEditor;
