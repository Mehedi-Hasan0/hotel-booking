"use client";

import { RefObject, useEffect } from "react";

export default function useOutSideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
): void {
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref, callback]);
}
