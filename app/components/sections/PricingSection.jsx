import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function PricingSection() {
  return (
    <section
      id="Pricing"
      className="w-full section max-w-screen-xl py-8 border-b-2 px-6 mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:pb-24"
    >
      <h1 className="text-3xl font-extrabold leading-tight text-center text-black dark:text-white sm:text-4xl lg:text-5xl dark:drop-shadow-lg">
        Pricing
      </h1>
      <div className="grid w-full max-w-screen-xl grid-cols-1 pt-[3rem] mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:grid-cols-3 gap-y-12 gap-x-16 lg:pb-24">
        {/* Basic Plan */}
        <div className="p-[1rem] md:p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Starter Plan
          </h1>

          <p className="mb-4 text-slate-500">
            Generate basic reports, presentations, and quizzes from your documents and media.
          </p>

          <div className="flex items-center gap-4 mb-[2rem]">
            <h2 className="text-4xl font-medium">₹ 499</h2>
            <span className="text-sm text-slate-500">
              per<br /> month
            </span>
          </div>

          <ul className="text-slate-500 mb-[3rem]">
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Generate from PDFs and web pages</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Basic report customization</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Up to 10 documents per month</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Email support</span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="bg-white rounded-full shadow-md"
            >
              Get Started
            </Button>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-slate-500">Limited slots</p>
            </div>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-md">
          <h1 className="mb-4 text-3xl font-bold">
            Pro Plan
          </h1>

          <p className="mb-4 text-slate-500">
            For businesses looking to create in-depth presentations, reports, and quizzes from various media sources.
          </p>

          <div className="flex items-center gap-4 mb-[2rem]">
            <h2 className="text-4xl font-medium">₹ 1499</h2>
            <span className="text-sm text-slate-500">
              per<br /> month
            </span>
          </div>

          <ul className="text-slate-500 mb-[3rem]">
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Generate from PDFs, PowerPoints, and YouTube</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Advanced report customization</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Unlimited documents</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Priority support</span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600"
            >
              Get Started
            </Button>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <p className="text-slate-500">Popular Choice</p>
            </div>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="p-[2rem] w-full h-full rounded-3xl lg:rounded-[2.5rem]">
          <h1 className="mb-4 text-3xl font-bold">
            Enterprise Plan
          </h1>

          <p className="mb-4 text-slate-500">
            Tailored solutions for large organizations needing customized features and integrations.
          </p>

          <Button
            variant="secondary"
            className="bg-white rounded-full shadow-md"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
