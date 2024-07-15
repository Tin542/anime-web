import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListItem = () => {
  return (
    <Link href="#" className="flex flex-row gap-3">
      <Image
        width={130}
        height={130}
        className="rounded"
        src="/popular-1.jpg"
        alt=""
      />
      <div className="flex flex-col justify-between gap-3">
        <div>
          <span className="inline-block bg-slate-600 rounded-full px-2 py-1 text-xs text-white mr-1 mb-1">
            Action
          </span>
          <span className="inline-block bg-slate-600 rounded-full px-2 py-1 text-xs text-white mr-1 mb-1">
            Movie
          </span>
        </div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-400">
          ranking: 5
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
