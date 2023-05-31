"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WebsiteInput() {
  const [url, setUrl] = useState<string>("");
  const router = useRouter();

  return (
    <div className="p-1 max-w-4xl w-full mx-auto flex items-center justify-center border rounded-md bg-gray-200 relative">
      <label htmlFor="website" className="sr-only">
        Website Url
      </label>
      <span className="absolute left-0 inset-y-0 text-black flex items-center justify-center text-xl sm:text-2xl lg:text-3xl pl-4 pr-3 border-r border-black">
        https://
      </span>
      <input
        type="url"
        className="flex-1 pl-32 lg:pl-36 py-2 bg-gray-200 text-xl sm:text-2xl lg:text-3xl !outline-none text-black"
        id="website"
        onChange={(e) => setUrl(e.target.value)}
        placeholder="ismailyarar.vercel.app"
      />
      <button
        onClick={() => router.push(`/website?url=${url}`)}
        className="px-8 py-2 bg-lime-600 rounded-md font-medium text-xl sm:text-2xl lg:text-3xl text-black"
      >
        Check Up
      </button>
    </div>
  );
}
