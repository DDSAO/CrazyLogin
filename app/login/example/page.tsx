import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="relative w-screen h-screen bg-[url('/images/loginDemo.jpg')] bg-contain bg-no-repeat bg-center"></div>
  );
}
