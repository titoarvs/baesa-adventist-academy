import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <main className="flex-1">
        {/* <Hero />
        <Announcements />
        <Advertisement />
        <About />
 */}
        <HeroSection
          title="Welcome to Our School"
          subtitle="The School that Trains for Service"
          backgroundImage="/assets/baa1.jpg"
        />

        <section
          id="announcement"
          className="h-screen bg-amber-100 transition-all duration-700 "
        >
          <h2>Contact Section</h2>
        </section>

        <section
          id="about"
          className="h-screen bg-amber-200 transition-all duration-700 "
        >
          <h2>Contact Section</h2>
        </section>
      </main>
    </div>
  );
}
