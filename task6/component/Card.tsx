import Link from "next/link";
import React from "react";

interface cardProps {
  title: string;
  id: string;
  description: string;
  location: string;
  company: string;
}

const Card = ({ title, id, description, location, company }: cardProps) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex items-start gap-4 mt-40 border rounded-2xl p-4 mb-4 font-paras">
        {/* image */}
        <img
          src="https://s3-alpha-sig.figma.com/img/8b54/6807/6cca52c8ac1355cc8b65197d428cf55d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF8V-S2fPiokLyBQ~YJ1IjgbmKxAO-Zi4mbC4eE-Sv-RH89JYkP6jDy5bXfFugPJJBWJ8937Ct1aZPqWV18ukT3M6YxSiuJLkdFws0OrTbPy65kYIvvPnVFUfjq-LDqlAotO6QRVWZ8KalnJleBLBzQgK3CyYJ-W4v7rJj04QRZ-y1fvK3nPVteX~2bOK7LD~MEbQ7jMkwDwgy3L9IHPXqeGviYMtYZ0E6gTAqerlaXXdBRsRlnpWLn7OJYyIT6wj6GG2rz2L-DyOL0tZj8-9GFbU1UKWEJV0PgpPRx-zgC11WQjZm1JmtkwXy3Av1lnFXffU5p5ZlXst~Bm0-U7Fg__"
          alt=""
        />

        {/* content */}
        <div>
            <h1>{title}</h1>
            <h1 className="my-4 text-red-500">{company} . {location}</h1>
            <p className="text-purple-400">asd</p>
            <p className="font-headers "> {description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;


// 5a6270