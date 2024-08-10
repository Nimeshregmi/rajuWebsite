import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "RajuBasnet",
  description: "Discover stunning visual creations with Raju Basnet, a leading video and graphics designer specializing in innovative video production, dynamic motion graphics, and cutting-edge graphic design. Explore captivating videos, unique branding solutions, and modern web design that elevate your brand.",
  keywords: [
    "beingraju",
    "raju",
    "basnet",
    "video",
    "editor",
    "graphics",
    "designer",
    "nepal",
    "professional video editor and graphics designer",
    "Motion Graphics",
    "Visual Storytelling",
    "Brand Identity Design",
    "Video Production",
    "Adobe Creative Suite",
    "3D Animation",
    "Logo Design",
    "Color Grading",
    "Typography",
    "Visual Effects (VFX)",
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Social Media Graphics",
    "Video Editing",
    "Infographic Design",
    "Cinematography",
    "Digital Illustration",
    "Branding Strategy",
    "Post-Production",
    "Responsive Web Design",
    "Package Design",
    "Storyboarding",
    "Drone Videography",
    "Print Design",
    "Corporate Video",
    "Animated Explainer Videos",
    "Photo Retouching",
    "Digital Marketing Visuals",
    "Compositing",
    "Sound Design",
    "Vector Graphics",
    "Event Videography",
    "Book Cover Design",
    "Augmented Reality (AR) Design",
    "Virtual Reality (VR) Design",
    "Podcast Cover Art",
    "Video Transitions",
    "Kinetic Typography",
    "Album Artwork",
    "360-Degree Video",
    "Whiteboard Animation",
    "E-commerce Product Photography",
    "Data Visualization",
    "Aerial Photography",
    "Stop Motion Animation",
    "Architectural Visualization",
    "Character Design",
    "Green Screen Editing",
    "Digital Painting",
    "Title Sequence Design",
    "Isometric Design",
    "Minimalist Design",
    "Flat Design",
    "Vintage/Retro Design",
    "Responsive Logo Design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-light dark:bg-dark w-full px-0 mx-0
       min-h-screen`}
      >
        <Script id="theme" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Navbar />
        <Analytics />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
