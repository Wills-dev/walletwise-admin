"use client";

import { useRef } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

type Props = {
  image: File | null;
  setImage: (file: File | null) => void;
  imageUrl?: string;
  setImageUrl?: (file: string) => void;
};

const ImageUpload = ({ image, setImage, imageUrl, setImageUrl }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
  };

  const removeImage = () => {
    setImage(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const preview = image ? URL.createObjectURL(image) : null;

  return (
    <div className="space-y-3">
      {imageUrl?.trim() === "" && !preview ? (
        <div
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-gray-400 transition"
        >
          <Upload className="w-8 h-8 text-gray-500 mb-2" />
          <p className="text-sm text-gray-600">Click to upload event image</p>
          <p className="text-xs text-gray-400">PNG, JPG up to 5MB</p>
        </div>
      ) : (
        <div className="relative w-full max-w-md">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt="Preview"
                width={448}
                height={448}
                className="rounded-lg w-full object-cover"
              />

              {setImageUrl !== undefined && (
                <button
                  type="button"
                  onClick={() => setImageUrl("")}
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded-full"
                >
                  <X size={16} />
                </button>
              )}
            </>
          ) : (
            <>
              {preview && (
                <>
                  <Image
                    src={preview}
                    alt="Preview"
                    width={448}
                    height={448}
                    className="rounded-lg w-full object-cover"
                  />

                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white p-2 rounded-full"
                  >
                    <X size={16} />
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleSelect}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
