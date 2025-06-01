import React, { useState, useRef, useEffect } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
} from "react-icons/fa";

const CreateBlogPage = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  const handleAlignment = (align) => {
    document.execCommand("justify" + align);
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragDropClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!tags.trim()) newErrors.tags = "Tags are required.";
    if (!content.trim()) newErrors.content = "Content is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (status) => {
    if (!validate()) return;

    let currentContent = content;
    if (!previewMode && contentRef.current) {
      currentContent = contentRef.current.innerHTML.trim();
    }

    const blogData = {
      title,
      category,
      tags: tags.split(",").map((tag) => tag.trim()),
      content: currentContent,
      image,
      status,
    };
    console.log("Blog Submitted:", blogData);

    setSubmitted(true);
    setTitle("");
    setCategory("");
    setTags("");
    setContent("");
    setImage(null);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";

    if (contentRef.current) contentRef.current.innerHTML = "";

    setPreviewMode(false);

    setTimeout(() => setSubmitted(false), 3000);
  };

  useEffect(() => {
    if (!previewMode && contentRef.current) {
      contentRef.current.innerHTML = content;
    }
  }, [previewMode]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row p-10 pt-20">
      {/* Responsive Toolbar: Sidebar on md+, top horizontal bar on small */}
      <div className="bg-white border-b md:border-b-0 md:border-r p-4 md:p-6 flex md:flex-col items-center md:items-start overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal">
        {/* Text Formatting */}
        <div className="flex md:flex-col items-center md:items-start space-x-3 md:space-x-0 md:space-y-6 mr-6 md:mr-0">
          <span className="hidden md:block font-semibold text-sm text-gray-600 tracking-wide mb-2">
            TEXT FORMATTING
          </span>
          {[["Bold", FaBold, "bold"],
            ["Italic", FaItalic, "italic"],
            ["Underline", FaUnderline, "underline"],
            ["Strikethrough", FaStrikethrough, "strikeThrough"]
          ].map(([label, Icon, cmd]) => (
            <button
              key={cmd}
              type="button"
              aria-label={label}
              onClick={() => handleFormatting(cmd)}
              className="text-gray-600 hover:text-violet-600 text-xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* Alignment */}
        <div className="flex md:flex-col items-center md:items-start space-x-3 md:space-x-0 md:space-y-6 ml-6 md:ml-0">
          <span className="hidden md:block font-semibold text-sm text-gray-600 tracking-wide mb-2">
            ALIGNMENT
          </span>
          {[["Align Left", FaAlignLeft, "Left"],
            ["Align Center", FaAlignCenter, "Center"],
            ["Align Right", FaAlignRight, "Right"],
            ["Justify", FaAlignJustify, "Full"]
          ].map(([label, Icon, align]) => (
            <button
              key={align}
              type="button"
              aria-label={label}
              onClick={() => handleAlignment(align)}
              className="text-gray-600 hover:text-violet-600 text-xl p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* Preview toggle */}
        <div className="ml-auto md:ml-0 md:mt-6 flex items-center space-x-2">
          <input
            id="preview-toggle"
            type="checkbox"
            checked={previewMode}
            onChange={() => setPreviewMode(!previewMode)}
            className="form-checkbox text-violet-600"
          />
          <label
            htmlFor="preview-toggle"
            className="text-sm text-gray-600 select-none cursor-pointer"
          >
            {previewMode ? "Preview Mode" : "Edit Mode"}
          </label>
        </div>
      </div>

      {/* Main Form */}
      <div className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center md:text-left">
          Create New Blog
        </h1>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your blog title..."
          className={`w-full border px-4 py-3 mb-2 rounded-md text-lg focus:outline-none focus:ring-2 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-violet-500"
          }`}
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby="title-error"
        />
        {errors.title && (
          <p className="text-red-600 text-sm mb-3" id="title-error" role="alert">
            {errors.title}
          </p>
        )}

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`w-full border px-4 py-3 mb-2 rounded-md text-lg bg-white focus:outline-none focus:ring-2 ${
            errors.category
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-violet-500"
          }`}
          aria-invalid={errors.category ? "true" : "false"}
          aria-describedby="category-error"
        >
          <option value="">Select a category</option>
          <option>Politics</option>
          <option>Movies</option>
          <option>Cultural</option>
          <option>Economics</option>
          <option>Cricket</option>
        </select>
        {errors.category && (
          <p
            className="text-red-600 text-sm mb-3"
            id="category-error"
            role="alert"
          >
            {errors.category}
          </p>
        )}

        {/* Tags */}
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Add tags (comma-separated)..."
          className={`w-full border px-4 py-3 mb-2 rounded-md text-lg focus:outline-none focus:ring-2 ${
            errors.tags
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-violet-500"
          }`}
          aria-invalid={errors.tags ? "true" : "false"}
          aria-describedby="tags-error"
        />
        {errors.tags && (
          <p className="text-red-600 text-sm mb-3" id="tags-error" role="alert">
            {errors.tags}
          </p>
        )}

        {/* Content Editor or Preview */}
        {previewMode ? (
          <div
            className="border border-gray-300 p-4 rounded min-h-[200px] mb-6 bg-white text-gray-900 max-w-full overflow-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div
            ref={contentRef}
            contentEditable
            role="textbox"
            aria-multiline="true"
            placeholder="Write your blog content here..."
            className={`border border-gray-300 rounded min-h-[200px] mb-6 p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 max-w-full overflow-auto`}
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            spellCheck={true}
          />
        )}
        {errors.content && (
          <p className="text-red-600 text-sm mb-3" role="alert">
            {errors.content}
          </p>
        )}

        {/* Image Upload & Preview */}
        <div
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleDragDropClick}
          className="cursor-pointer border border-dashed border-gray-400 rounded p-4 mb-6 flex flex-col items-center justify-center text-gray-500 hover:text-violet-600 transition max-w-full mx-auto"
          style={{ minHeight: "180px" }}
        >
          {!image ? (
            <>
              <p className="mb-1 font-semibold">Drag & Drop or Click to Upload Image</p>
              <p className="text-xs">Supports JPG, PNG, GIF</p>
            </>
          ) : (
            <div className="relative w-full max-w-xs mx-auto">
              <img
                src={image}
                alt="Uploaded preview"
                className="object-contain rounded max-h-60 mx-auto"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Remove uploaded image"
              >
                &times;
              </button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            type="button"
            onClick={() => handleSubmit("published")}
            className="bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-md text-lg font-semibold transition w-full sm:w-auto"
          >
            Publish
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-6 rounded-md text-lg font-semibold transition w-full sm:w-auto"
          >
            Save Draft
          </button>
        </div>

        {/* Success Message */}
        {submitted && (
          <p className="mt-6 text-center text-green-600 font-medium">
            Blog submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateBlogPage;
