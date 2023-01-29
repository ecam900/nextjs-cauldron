import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className="min-h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-blue-900 to-violet-900">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="bg- absolute inset-0 h-screen w-screen bg-[url('/assets/images/pixels.png')] bg-contain bg-repeat" />
      <p>Hellos</p>
    </div>
  );
};

export default Index;
