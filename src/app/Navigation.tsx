"use client";

import Link from "next/link";
import useIntersect from "@/hooks/useIntersect";
import { useRef } from "react";

export const Navigation = () => {
  const ref = useRef<HTMLElement>(null);
  const isIntersecting = useIntersect({ ref });

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/50  border-zinc-800 "
        }`}
      >
        <div className="md:container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/"
            className="duration-200 text-2xl font-bold underline text-zinc-300 hover:text-zinc-100"
          >
            seo-checkup
          </Link>
          {/* <Link
            href="/component"
            className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-200"
          >
            Component
          </Link> */}
        </div>
      </div>
    </header>
  );
};
