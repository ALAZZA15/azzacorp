import { Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";

export default function App() {
  return (
    <div className="relative min-h-dvh">
      <StarField />
      <div className="relative z-10 flex min-h-dvh flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/ezorb"
              element={
                <Placeholder
                  title="EzOrb"
                  tagline="A Linux distribution"
                  description="A distro built from the ground up — custom kernel, package manager, and a clear user experience. Currently in active development."
                  accent="cyan"
                />
              }
            />
            <Route
              path="/smartkey"
              element={
                <Placeholder
                  title="Smart Key"
                  tagline="A smart access system"
                  description="An Android application that turns your phone into a key — secure, simple, and fast. Currently in active development."
                  accent="mars"
                />
              }
            />
            <Route
              path="/ai"
              element={
                <Placeholder
                  title="Azza AI"
                  tagline="AI agents"
                  description="Purpose-built AI agents that work quietly in the background, helping without interrupting. Currently planned."
                  accent="violet"
                />
              }
            />
            <Route
              path="*"
              element={
                <Placeholder
                  title="Lost in space"
                  tagline="Page not found"
                  description="This corner of the sky doesn't exist yet. Let's head back home."
                  accent="cyan"
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}