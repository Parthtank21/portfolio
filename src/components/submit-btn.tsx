"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa6";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-gray-900/65 dark:bg-white/10 dark:hover:bg-white/20 dark:disabled:bg-white/40"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 border-b-2 border-white rounded-full animate-spin"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </>
      )}
    </button>
  );
}
