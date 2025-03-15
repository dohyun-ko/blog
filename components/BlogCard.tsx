import { JSX } from "preact";

interface BlogCardProps {
  category: string;
  title: string;
  imageUrl: string;
  href: string;
  variant?: "small" | "medium" | "large";
}

export default function BlogCard({
  category,
  title,
  imageUrl,
  href,
  variant = "small",
}: BlogCardProps): JSX.Element {
  return (
    <div className="p-5 h-full flex flex-col rounded-[30px] gap-[10px] aspect-[4/3] bg-amber-100">
      <span className="text-xs uppercase text-amber-700">
        {category}
      </span>
      <h2 className="text-2xl leading-tight">
        {title}
      </h2>
      <div className="flex-grow relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <a
        href={href}
        className="flex items-center justify-between px-5 py-2 rounded-full transition-colors w-full bg-amber-200 hover:bg-amber-300"
      >
        <span>Read More</span>
        <span className="ml-2">→</span>
      </a>
    </div>
  );
}
