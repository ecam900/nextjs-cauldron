import type { NextPage } from 'next';

import SunMoon from '@/components/svg/SunMoon';

const Index: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-y-auto overflow-x-hidden bg-gradient-to-b from-blue-900 to-violet-900">
      {/* Pixel Overlay */}
      <div className="absolute inset-0 z-10 h-screen w-screen bg-[url('/assets/images/pixels.png')] bg-contain bg-repeat" />

      {/* Main Wrapper Container */}
      <main className={'container relative max-w-7xl'}>
        <SunMoon />

        {/* Featured Section */}
        <div className="flex h-screen flex-col-reverse items-center pb-[10vh]">
          {/* Featured Text Container */}
          <div className="container relative z-20 space-y-4">
            {/* Title */}
            <h1 className="font-sans text-5xl font-bold leading-none text-white">
              Sereno Software
            </h1>
            {/* Subtitle */}
            <h1 className="pb-2 font-sans text-4xl leading-none text-slate-300">
              From Design To CI
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
