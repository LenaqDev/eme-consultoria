import { BlogPage } from "@/features/blog/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - EME Consultorías",
    description: "Noticias y artículos sobre desarrollo sostenible.",
};

export default function Page() {
    return <BlogPage />;
}
