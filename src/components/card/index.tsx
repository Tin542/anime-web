import Image from "next/image";
import React from "react";

const CardComponent = () => {
  return (
    <div className="w-[252px] rounded overflow-hidden">
      <Image
        width={300}
        height={400}
        className="rounded"
        src="/recent-3.jpg"
        alt="Sunset in the mountains"
      />
      <div className="pt-2">
        <span className="inline-block bg-slate-600 rounded-full px-2 py-1 text-xs text-white mr-1 mb-1">
          Action
        </span>
        <span className="inline-block bg-slate-600 rounded-full px-2 py-1 text-xs text-white mr-1 mb-1">
          Movie
        </span>
      </div>
      <div className="font-bold text-s mb-2">
        Code Geass: Hangyaku no Lelouch R2
      </div>
    </div>
  );
};

export default CardComponent;
