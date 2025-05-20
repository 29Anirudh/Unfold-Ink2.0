import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [preview, setPreview] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
      Image,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    content: "<p>Start writing your blog post here...</p>",
  });

  const handleSaveDraft = () => {
    const blog = {
      title,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
      content: editor?.getHTML(),
      status: "draft",
    };
    console.log("Draft Saved:", blog);
    alert("Draft saved!");
  };

  const handlePublish = () => {
    const blog = {
      title,
      category,
      tags: tags.split(',').map(tag => tag.trim()),
      content: editor?.getHTML(),
      status: "published",
    };
    console.log("Blog Published:", blog);
    alert("Blog published!");
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        editor?.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInsertLink = () => {
    const url = prompt("Enter URL");
    const text = prompt("Enter display text");
    if (url && text) {
      editor?.chain().focus().insertContent(`<a href="${url}" target="_blank">${text}</a>`).run();
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-lg">
      {/* Sidebar */}
      <div className="w-[20%] border-r p-6 space-y-6 bg-white">
        <div className="text-violet-600 font-bold text-lg cursor-pointer">
          ← <a href="/">Back to Home</a>
        </div>

        <div>
          <h3 className="text-violet-500 font-semibold mb-2">TEXT</h3>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => editor?.chain().focus().toggleBold().run()} className="text-xl font-bold">B</button>
            <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="text-xl italic">I</button>
            <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className="text-xl underline">U</button>
            <button onClick={() => editor?.chain().focus().toggleStrike().run()} className="text-xl line-through">S</button>
          </div>
        </div>

        <div>
          <h3 className="text-violet-500 font-semibold mb-2">HEADINGS</h3>
          <div className="flex gap-3">
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()} className="text-xl">H1</button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} className="text-xl">H2</button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()} className="text-xl">H3</button>
          </div>
        </div>

        <div>
          <h3 className="text-violet-500 font-semibold mb-2">ALIGNMENT</h3>
          <div className="flex gap-3 text-xl">
            <button onClick={() => editor?.chain().focus().setTextAlign('left').run()}>⬅️</button>
            <button onClick={() => editor?.chain().focus().setTextAlign('center').run()}>↔️</button>
            <button onClick={() => editor?.chain().focus().setTextAlign('right').run()}>➡️</button>
          </div>
        </div>

        <div>
          <h3 className="text-violet-500 font-semibold mb-2">INSERT</h3>
          <div className="flex gap-3 text-xl">
            <label className="cursor-pointer">
              📁
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            <button onClick={handleInsertLink}>🔗</button>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-violet-500 font-semibold mb-2">PREVIEW</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={preview}
              onChange={() => setPreview(!preview)}
            />
            {preview ? "Preview Mode" : "Edit Mode"}
          </label>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-[80%] p-10 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700">Create New Blog</h1>
          <div className="space-x-3">
            <button onClick={handleSaveDraft} className="border px-4 py-2 rounded text-gray-700 hover:bg-gray-100">
              🗂 Save Draft
            </button>
            <button onClick={handlePublish} className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">
              🚀 Publish
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Enter your blog title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border px-4 py-3 text-xl rounded"
        />

        <select
          className="w-full border px-4 py-3 text-lg rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select a category</option>
          <option>Politics</option>
          <option>Movies</option>
          <option>Cultural</option>
          <option>Economics</option>
          <option>Cricket</option>
        </select>

        <input
          type="text"
          placeholder="Add tags (comma-separated)..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border px-4 py-3 text-lg rounded"
        />

        {!preview ? (
          <EditorContent editor={editor} className="border p-6 min-h-[300px] rounded bg-white text-xl" />
        ) : (
          <div
            className="border p-6 min-h-[300px] rounded bg-gray-100 text-xl"
            dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }}
          />
        )}
      </div>
    </div>
  );
};

export default BlogEditor;