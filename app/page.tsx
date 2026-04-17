import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen text-[#3a4a44] bg-[radial-gradient(ellipse_120%_90%_at_50%_-10%,#eef5ee_0%,#e2ece2_50%,#d5e3d5_100%)]">
        <Navbar />
        <Hero />
      </div>
      <Footer />
    </>
  );
}
