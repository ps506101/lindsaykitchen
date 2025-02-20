import Hero from "@/components/hero";
import Menu from "@/components/menu";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
}
