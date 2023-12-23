import React from "react";
import { poems } from "src/text/poems";
import PostCard from "src/pages/Feed/PoemList/PoemCard";

type Props = {};

const PoemList: React.FC<Props> = () => {
  // TODO: make into fetch request / use hook
  const data = poems;
  return (
    <>
      <div className="my-2">
        {!data.length && (
          <p className="text-gray-500 dark:text-gray-300">Nothing! 😺</p>
        )}
        {data.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </>
  );
};

export default PoemList;
