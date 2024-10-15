import AddUser from "../Icons/AddUser";
import FolderIcon from "../Icons/FolderIcon";
import HeartIcon from "../Icons/HeartIcon";
import LightningIcon from "../Icons/LightningIcon";
import RocketIcon from "../Icons/RocketIcon";
import WatchIcon from "../Icons/WatchIcon";

function FeatureSection() {
  return (
    <section
      id="Process"
      className="relative w-full max-w-screen-xl px-6 py-16 mx-auto section border-y sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <WatchIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Stay Updated with the Latest AI Insights
            </h1>
          </div>
          <p className="text-slate-500">
            As AI technology evolves, SynthIQ ensures that your content is
            always up-to-date with cutting-edge insights and practices, allowing
            you to stay ahead in the industry.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <HeartIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Personalized AI-Driven Content
            </h1>
          </div>
          <p className="text-slate-500">
            Experience AI-powered customization to adapt content structure and
            design that perfectly aligns with your brand&apos;s style and user
            preferences.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <FolderIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Cost-Effective Content Solutions
            </h1>
          </div>
          <p className="text-slate-500">
            Access AI-powered tools that streamline content creation, offering a
            budget-friendly solution for startups and enterprises without
            compromising on quality.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <RocketIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Propel Your Content Ahead of the Competition
            </h1>
          </div>
          <p className="text-slate-500">
            Harness the power of AI to deliver expertly crafted reports,
            quizzes, and presentations that set your content apart from the
            competition.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <AddUser />
            </div>
            <h1 className="text-xl font-extrabold">
              Increase Engagement and User Sign-Ups
            </h1>
          </div>
          <p className="text-slate-500">
            Capture more leads and boost engagement with AI-optimized landing
            pages that drive sign-ups and spark interest across social
            platforms.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-blue-300">
              <LightningIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Seamlessly Evolve with Your Growing Needs
            </h1>
          </div>
          <p className="text-slate-500">
            As your requirements grow, SynthIQ adapts and scales with you,
            adding new features and capabilities to your content effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
