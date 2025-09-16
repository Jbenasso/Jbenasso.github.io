import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckSquare, Calendar, BookOpen, Briefcase } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f8f4] text-[#2e2e2e] font-serif">
      {/* Header Banner */}
      <header className="relative w-full">
        <img
          src="/images/garden-banner.jpg"
          alt="Garden Banner"
          className="w-full h-40 object-cover rounded-b-2xl shadow"
        />
        <h1 className="absolute bottom-3 left-6 text-3xl font-semibold text-[#2e2e2e] bg-[#f7f8f4]/70 px-3 py-1 rounded-lg shadow">
          meadow haven
        </h1>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 mt-8">
        <NavLink icon={<BookOpen />} label="Personal" />
        <NavLink icon={<Briefcase />} label="Work" />
        <NavLink icon={<Calendar />} label="Calendar" />
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-4">
        {/* Assignments */}
        <Card className="bg-[#fdfdfb] border-[#d8e3d3] shadow-sm">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold mb-4 text-[#395b44]">
              Assignments
            </h2>
            <ul className="space-y-4">
              <Assignment
                title="Assignment 1 – Basic HTML"
                img="/images/assignment1.png"
                desc="My first webpage using semantic HTML5 elements."
                link="assignments/01html/index.html"
              />
              <Assignment
                title="Assignment 2 – CSS Styling"
                img="/images/assignment2.png"
                desc="Styled with CSS for colors, borders, and spacing."
                link="assignments/02css/index.html"
              />
              <Assignment
                title="Assignment 3 – Flexbox Layout"
                img="/images/assignment3.png"
                desc="Responsive layouts with Flexbox."
                link="examples/flex/index.html"
              />
            </ul>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="bg-[#fdfdfb] border-[#d8e3d3] shadow-sm">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold mb-4 text-[#395b44]">
              Projects
            </h2>
            <ul className="space-y-4">
              <Assignment
                title="Project Step 1 – Topic PDF"
                img="/images/project-topic.png"
                desc="Outlining my semester project."
                link="projects/part1/MusicGenresWebsite.pdf"
              />
              <Assignment
                title="Project Step 2 – Website"
                img="/images/project2.png"
                desc="Interactive music genres project."
                link="projects/part2/index.html"
              />
            </ul>
          </CardContent>
        </Card>

        {/* Affirmations / Tasks */}
        <Card className="bg-[#fdfdfb] border-[#d8e3d3] shadow-sm">
          <CardContent className="p-5">
            <h2 className="text-xl font-semibold mb-4 text-[#395b44] flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#7a9a7e]" /> Urgent Tasks
            </h2>
            <ul className="space-y-2 text-[#444]">
              <li>☐ Continue working on pubmats</li>
              <li>☐ Create new Notion template</li>
              <li>☐ Work on portfolio/resume</li>
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-2 text-[#395b44]">
              Affirmations
            </h2>
            <p className="italic text-[#555]">
              I am learning and improving every day, with patience and care 🌱
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="text-center mt-10 py-6 text-[#666] border-t border-[#d8e3d3]">
        ✦ Made with calm vibes in nature ✦
      </footer>
    </div>
  );
}

/* Subcomponents */
function NavLink({ icon, label }) {
  return (
    <Button
      variant="ghost"
      className="flex items-center gap-2 text-[#395b44] hover:bg-[#eaf1e9] rounded-lg"
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
}

function Assignment({ title, img, desc, link }) {
  return (
    <li className="flex gap-3 items-start">
      <img
        src={img}
        alt={title}
        className="w-16 h-16 object-cover rounded-md border border-[#d8e3d3]"
      />
      <div className="text-left">
        <a
          href={link}
          className="font-semibold text-[#2e2e2e] hover:underline"
        >
          {title}
        </a>
        <p className="text-sm text-[#666]">{desc}</p>
      </div>
    </li>
  );
}
