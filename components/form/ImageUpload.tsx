"use client";

import { useState, useCallback } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import type React from "react";

interface UploadProfileProps {
  onUpload?: (url: string) => void;
  className?: string;
}

export default function UploadProfile({ onUpload, className }: UploadProfileProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const uploadImage = async (file: File) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);
    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        const imageUrl = result.data.url;
        setPreview(imageUrl);
        onUpload?.(imageUrl);
      } else {
        console.error("Upload failed:", result);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleFile = useCallback(
    (file: File) => {
      if (file && file.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(file));
        uploadImage(file);
      }
    },
    [onUpload]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      handleFile(file);
    },
    [handleFile]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  return (
    <div
      className={`p-6 rounded-3xl bg-[#052228] max-h-[344px] border-secondary border ${className || ""}`}
    >
      <h2 className="text-normal font-roboto text-grey mb-6">Upload Profile Photo</h2>
      <div className="bg-background w-full h-auto flex justify-center">
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
          relative flex flex-col items-center justify-center 
          w-full max-w-[240px] max-h-[240px] aspect-square rounded-3xl
          ${isDragging ? "bg-[#004444]" : "bg-secondary"}
          cursor-pointer transition-all duration-200
          group
        `}
        >
          <input type="file" className="sr-only" accept="image/*" onChange={handleFileSelect} />

          {preview ? (
            <>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img src={preview} alt="Profile preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="flex flex-col justify-center items-center">
                    <FaCloudUploadAlt className="w-8 h-8 text-white mb-2" />
                    <p className="text-white text-center">
                      {uploading ? "Uploading..." : "Drag & drop or click to upload"}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <FaCloudUploadAlt className="w-8 h-8 text-white mb-2" />
              <p className="text-white text-center">
                {uploading ? "Uploading..." : "Drag & drop or click to upload"}
              </p>
            </>
          )}
        </label>
      </div>
    </div>
  );
}
