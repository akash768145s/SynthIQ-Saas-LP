import BeautyIcon from '../Icons/BeautyIcon';
import FolderIcon from '../Icons/FolderIcon';
import RocketIcon from '../Icons/RocketIcon';

/* eslint-disable @next/next/no-img-element */
function ProductSection() {
  return (
    <section
      id="Work"
      className="relative w-full max-w-screen-xl px-6 py-4 pt-16 mx-auto border-b-2 section md:py-16 sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="mb-8 lg:mb-12">
        <h1 className="text-3xl font-extrabold leading-tight text-black dark:text-white font-display sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center">
          Unlock the Power of AI for Your Content
        </h1>
      </div>

      <div className="grid gap-4 bg-[#F9FAFB] grid-cols-1 p-10 border-2 rounded-3xl md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-3xl font-semibold">
            Automated Report & Quiz Generation
          </h1>
          <p>
          SynthIQ empowers you to transform your content effortlessly. Our AI-driven platform converts various media formats like PDFs, PowerPoints, YouTube videos, and web pages into detailed reports, interactive quizzes, and stunning presentations within minutes. Save time and focus on what matters most while we handle the content processing.
          </p>
        </div>
        <div className="relative">
          <img
            className="object-cover bg-center"
            src="/web-design.png"
            fill={true}
            alt="AI-powered content transformation"
          />
        </div>
      </div>

      <div className="my-[4rem] max-w-[26rem]">
        <h1 className="mb-6 text-3xl font-bold">
          High-Quality Outputs, Tailored for Your Needs
        </h1>
        <p>
          Leverage the power of AI to produce high-quality, structured content that engages your audience. Our platform ensures that every report, presentation, and quiz is optimized for clarity and impact, while offering customization options to match your brand’s style. Seamlessly preview and edit content in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <RocketIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Stay Ahead with Cutting-Edge AI Solutions
            </h1>
          </div>
          <p className="text-slate-500">
            With SynthIQ your content creation process is always at the forefront of technology, giving you a competitive edge. Automate tedious tasks and deliver polished outputs with unprecedented speed.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <BeautyIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Effortless Content Transformation
            </h1>
          </div>
          <p className="text-slate-500">
            Our AI engine converts your media effortlessly, ensuring a smooth process from raw content to polished deliverables. Say goodbye to manual formatting and structuring.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <FolderIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Affordable AI-Powered Content Creation
            </h1>
          </div>
          <p className="text-slate-500">
            High-quality AI services don&apos;t have to break the bank.SynthIQ  offers competitive pricing plans that make AI-powered content creation accessible to startups and enterprises alike.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
