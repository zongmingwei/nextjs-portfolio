"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";

function Photo({ photo }) {
  return (
    <div className="flex flex-col gap-1 justify-end">
      <Zoom>
        <Image
          src={photo.photoURL}
          alt={photo.name}
          className="w-full rounded-lg aspect-16/10"
          width={1600}
          height={1000}
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">{photo.name}</p>
      </Zoom>
    </div>
  );
}

export default Photo;
