import { assets } from "./Assets/assets";

// HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between bg-yellow text-white overflow-hidden">
      {/* Left side */}
      <div className="w-1/2 bg-gray-100 text-black p-10 z-10">
        <h2 className="text-xl">Hi, I am</h2>
        <h1 className="text-4xl font-bold mt-2">Tomasz Gajda</h1>
        <p className="text-lg text-gray-600 mt-2">Front-end Developer / UI Designer</p>

        {/* Social icons (replace with actual icons or react-icons) */}
        <div className="flex space-x-4 mt-6">
          <div className="bg-black text-white p-2 rounded-full">IG</div>
          <div className="bg-black text-white p-2 rounded-full">GH</div>
          <div className="bg-black text-white p-2 rounded-full">LN</div>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-1/2 relative z-10 flex items-center justify-center">
        <img
          src={assets.uploadArea} // replace with your image
          alt="Profile"
          className="w-[80%] rounded-xl shadow-lg"
        />
      </div>

      {/* Diagonal shape */}
      <div className="absolute inset-0 bg-black clip-diagonal z-0"></div>
    </div>
  );
};

export default HeroSection;
