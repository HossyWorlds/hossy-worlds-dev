import React from "react";

export default function BlogArticle() {
  return (
    <article className="bg-white rounded-lg shadow p-8 w-full">
      <h2 className="text-3xl font-bold mb-2">ブログ記事タイトル</h2>
      <p className="text-gray-500 text-sm mb-4">2024-06-01</p>
      <div className="text-lg leading-relaxed text-gray-800">
        これはブログ記事の本文のダミーテキストです。ここに記事の内容が入ります。
      </div>
    </article>
  );
} 
