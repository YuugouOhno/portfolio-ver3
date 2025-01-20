'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-purple-500">
              YuugouOhno
            </Link>
          </div>

          {/* ハンバーガーメニュー (モバイル対応) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* メニューリンク (デスクトップ対応) */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
