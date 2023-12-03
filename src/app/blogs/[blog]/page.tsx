import { blogData } from "@/data/blogData";

interface BlogProps {
  params: {
    blog: string;
  };
}

export default function Blog({ params }: BlogProps) {
  const blog = blogData.find((data) => {
    return data.id === params.blog;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold">{blog?.title}</h1>
      <p className="text-sm">{blog?.content}</p>
    </div>
  );
}
