import Footer from "@/components/footer";
import FeaturedMovies from "@/components/landing/featured-movies";
import HeroBanner from "@/components/landing/hero-banner";
import MainNav from "@/components/main-nav";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="grow flex items-center justify-center">
       <HeroBanner />
       </main>
        <FeaturedMovies />
      
      <Footer />
    </div>
  );
}
