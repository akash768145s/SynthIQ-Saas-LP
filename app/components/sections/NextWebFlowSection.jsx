import NextJs from "../Logos/NextJs";
import Shadcn from "../Logos/Shadcn";
import Tailwindcss from "../Logos/Tailwindcss";

function NextWebFlowSection() {
  return (
    <section
      id="About"
      className="relative w-full max-w-screen-xl px-6 pt-16 mx-auto border-b-2 section sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="mb-[2rem] max-w-[26rem]">
        <h1 className="mb-6 text-3xl font-bold">
          Built with Modern Technologies for Seamless AI Integration
        </h1>
        <p>
          At SynthIQ we go beyond typical website builders. Our platform is
          built with a powerful tech stack, including Next.js, Tailwind CSS, and
          modern libraries, ensuring fast performance and scalability. This
          enables seamless integration of AI services, delivering dynamic
          reports, presentations, and quizzes from various media sources like
          PDFs, videos, and web pages.
        </p>
      </div>

      <div className="grid items-center w-full grid-cols-2 mb-8 md:grid-cols-3 md:gap-4">
        <NextJs />
        <Tailwindcss />
        <Shadcn />
      </div>
    </section>
  );
}

export default NextWebFlowSection;
