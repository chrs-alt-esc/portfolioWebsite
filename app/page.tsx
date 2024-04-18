import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivder from "@/components/section_divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivder />
      <About />
    </main>
  )
}
