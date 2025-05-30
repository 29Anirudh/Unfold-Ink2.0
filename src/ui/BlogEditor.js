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
  const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;
  // Formatting commands
  const handleFormatting = (command) => {
    document.execCommand(command, false, null);
  };

  // Alignment commands
  const handleAlignment = (align) => {
    document.execCommand("justify" + align);
  };

  // Drag and drop image handler
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

  // Open file dialog when clicking drag-drop area
  const handleDragDropClick = () => {
    fileInputRef.current?.click();
  };

  // Handle file input change for image upload
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

  // Remove selected image
  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!category.trim()) newErrors.category = "Category is required.";
    if (!tags.trim()) newErrors.tags = "Tags are required.";
    if (!content.trim()) newErrors.content = "Content is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (status) => {
    if (!validate()) return;

    let currentContent = content;
    if (!previewMode && contentRef.current) {
      currentContent = contentRef.current.innerHTML.trim();
    }

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("tags", tags); // Let backend split if needed
    formData.append("content", currentContent);
    formData.append("status", status);
    if (fileInputRef.current?.files[0]) {
      formData.append("featuredImage", fileInputRef.current.files[0]);
    }

    try {
      const response = await fetch(
        `${BASE_URL}/api/blogs`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }

      // Reset form
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
    } catch (err) {
      alert(err.message);
    }
  };
  // Sync contentEditable innerHTML only when switching back to edit mode
  useEffect(() => {
    if (!previewMode && contentRef.current) {
      contentRef.current.innerHTML = content;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previewMode]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for formatting */}
      <div className="w-[15%] border-r p-6 space-y-10 bg-white text-2xl text-gray-700 flex flex-col">
        <div className="space-y-3">
          <div className="font-semibold text-sm text-gray-600 tracking-wide">
            TEXT FORMATTING
          </div>
          <div className="flex space-x-3 text-gray-600">
            <button
              type="button"
              aria-label="Bold"
              onClick={() => handleFormatting("bold")}
              className="hover:text-violet-600"
            >
              <FaBold />
            </button>
            <button
              type="button"
              aria-label="Italic"
              onClick={() => handleFormatting("italic")}
              className="hover:text-violet-600"
            >
              <FaItalic />
            </button>
            <button
              type="button"
              aria-label="Underline"
              onClick={() => handleFormatting("underline")}
              className="hover:text-violet-600"
            >
              <FaUnderline />
            </button>
            <button
              type="button"
              aria-label="Strikethrough"
              onClick={() => handleFormatting("strikeThrough")}
              className="hover:text-violet-600"
            >
              <FaStrikethrough />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="font-semibold text-sm text-gray-600 tracking-wide">
            ALIGNMENT
          </div>
          <div className="flex space-x-3 text-gray-600">
            <button
              type="button"
              aria-label="Align Left"
              onClick={() => handleAlignment("Left")}
              className="hover:text-violet-600"
            >
              <FaAlignLeft />
            </button>
            <button
              type="button"
              aria-label="Align Center"
              onClick={() => handleAlignment("Center")}
              className="hover:text-violet-600"
            >
              <FaAlignCenter />
            </button>
            <button
              type="button"
              aria-label="Align Right"
              onClick={() => handleAlignment("Right")}
              className="hover:text-violet-600"
            >
              <FaAlignRight />
            </button>
            <button
              type="button"
              aria-label="Justify"
              onClick={() => handleAlignment("Full")}
              className="hover:text-violet-600"
            >
              <FaAlignJustify />
            </button>
          </div>
        </div>

        <div className="pt-6">
          <label className="flex items-center text-sm text-gray-600 space-x-2">
            <input
              type="checkbox"
              checked={previewMode}
              onChange={() => setPreviewMode(!previewMode)}
              className="form-checkbox text-violet-600"
            />
            <span>{previewMode ? "Preview Mode" : "Edit Mode"}</span>
          </label>
        </div>
      </div>

      {/* Main Form */}
      <div className="w-[85%] p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Create New Blog
        </h1>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your blog title..."
          className={`w-full border px-5 py-3 mb-2 rounded-md text-lg focus:outline-none focus:ring-2 ${
            errors.title
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-violet-500"
          }`}
          aria-invalid={errors.title ? "true" : "false"}
          aria-describedby="title-error"
        />
        {errors.title && (
          <p
            className="text-red-600 text-sm mb-3"
            id="title-error"
            role="alert"
          >
            {errors.title}
          </p>
        )}

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`w-full border px-5 py-3 mb-2 rounded-md text-lg bg-white focus:outline-none focus:ring-2 ${
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
          className={`w-full border px-5 py-3 mb-2 rounded-md text-lg focus:outline-none focus:ring-2 ${
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

        {/* Blog content editor or preview */}
        {!previewMode ? (
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={(e) => setContent(e.currentTarget.innerHTML)}
            className={`border p-5 min-h-[250px] rounded-md bg-white text-lg mb-3 overflow-auto focus:outline-none focus:ring-2 ${
              errors.content
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-violet-500"
            }`}
            spellCheck={true}
            aria-label="Blog content editor"
          />
        ) : (
          <div
            className="border p-5 min-h-[250px] rounded-md bg-gray-100 mb-3 overflow-auto prose max-w-full"
            dangerouslySetInnerHTML={{ __html: content }}
            aria-label="Blog content preview"
          />
        )}
        {errors.content && (
          <p
            className="text-red-600 text-sm mb-3"
            role="alert"
            aria-live="assertive"
          >
            {errors.content}
          </p>
        )}

        {/* Drag & Drop Image upload */}
        <div
          onDrop={handleImageDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleDragDropClick}
          className="w-full border-2 border-dashed border-gray-400 rounded-md p-10 text-center cursor-pointer text-gray-600 hover:border-violet-500 transition"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleDragDropClick();
            }
          }}
          aria-label="Drag and drop image upload area, click to select file"
        >
          {image ? (
            <div className="relative inline-block">
              <img
                src={image}
                alt="Uploaded preview"
                className="max-h-60 mx-auto rounded-md"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveImage();
                }}
                aria-label="Remove image"
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 hover:bg-red-700 transition"
              >
                &times;
              </button>
            </div>
          ) : (
            <p>
              Drag & drop an image here, or click to select a file.
              <br />
              <span className="text-sm text-gray-400">
                (Only images allowed)
              </span>
            </p>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
        </div>

        {/* Submit buttons */}
        <div className="mt-8 flex space-x-5">
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            className="px-6 py-3 bg-gray-300 rounded-md hover:bg-gray-400 transition"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("published")}
            className="px-6 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
          >
            Publish Blog
          </button>
        </div>

        {/* Submission message */}
        {submitted && (
          <p className="mt-5 text-green-600 font-semibold">
            Blog submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateBlogPage;
