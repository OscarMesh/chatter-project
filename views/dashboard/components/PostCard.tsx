import Avatar from "@/components/Avatar";
import Image from "next/image";
import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";
import { MdOutlineAnalytics } from "react-icons/md";

interface PostCardProps {
  //   title?: string;
  //   description?: string;
  //   image?: string;
  //   id?: string;
}

const PostCard: React.FC<PostCardProps> = (
  {
    //   title,
    //   description,
    //   image,
    //   id,
  }
) => {
  return (
    <div className="max-w-[620px] p-6  border-b border-b-gray-400">
      {/* header group */}
      <div className="flex space-x-6 items-center">
        <Avatar />
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-medium">Oscar Okereke</h3>
          <p className="text-sm text-gray-400">
            Product designer .May 25th, 2023
          </p>
        </div>
      </div>
      {/* post title */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl font-semibold mt-4">
          Starting out as a Product designer
        </h3>
        <div className="text-gray-400 space-x-2 flex items-center">
          <VscBook className="font-medium" />
          <span className="text-sm">6 min read</span>
        </div>
      </div>
      {/* post body */}
      <div>
        <p className="text-gray-600 mt-4">
          Embarking on a journey as a product designer can be an exhilarating
          and fulfilling experience. As a profession that bridges the realms of
          art, technology, and problem-solving, product design offers an
          opportunity to shape the way people interact with the world around
          them.
        </p>

        <Image
          src="/assets/images/post.png"
          alt="post image"
          width={500}
          height={500}
          layout="responsive"
          className="rounded-xl mt-4"
        />
      </div>
      {/* anlyrics */}

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2 text-gray-400 items-center">
          <AiOutlineComment />
          <span>200</span>
        </div>
        <div className="flex space-x-2 text-gray-400 items-center">
          <SlLike />
          <span>18</span>
        </div>
        <div className="flex space-x-2 text-gray-400 items-center">
          <MdOutlineAnalytics />
          <span>1200 views</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
