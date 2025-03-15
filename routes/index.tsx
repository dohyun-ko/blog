import BlogCard from "../components/BlogCard.tsx";

export default function Home() {
  return (
    <section class={"grid grid-cols-3 gap-5"}>
      <BlogCard
        category="Category 1"
        title="Post 1"
        imageUrl="https://via.placeholder.com/600x400"
        href="/post/1"
        variant="small"
      />
    </section>
  );
}
