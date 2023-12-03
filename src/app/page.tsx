import { blogData } from "@/data/blogData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      {blogData.map((data) => (
        <Link href={`/blogs/${data.id}`}>{data.title}</Link>
      ))}
    </div>
  );
}
