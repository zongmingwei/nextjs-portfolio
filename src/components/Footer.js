import React from "react";
import Link from "@/components/atoms/Link";

const Footer = function() {
  return (
    <footer className="flex flex-col gap-2 items-center w-full px-4 py-8 text-sm">
      <div>© {new Date().getFullYear()} zongming</div>
      <nav className="flex gap-4 items-center">
        <Link to="/posts">文章</Link>
        <Link to="/photography" isAct>
          摄影
        </Link>
        <Link to="/about">关于</Link>
      </nav>
      <div className="text-gray-600">
        Built with{" "}
        <Link href="https://figma.com/" target="_blank">
          Figma
        </Link>
        ,{" "}
        <Link href="https://nextjs.org/" target="_blank">
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
