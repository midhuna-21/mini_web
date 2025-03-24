import HomecarImage from "../../public/homecar.jpg";

const Section1 = () => {
  return (
      <div
                 className="relative bg-gradient-to-b from-black via-gray-900 to-blue-900 bg-cover bg-center min-h-[90vh] w-full flex items-center justify-center"
                 style={{
                     backgroundImage: `url(${HomecarImage})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                 }}>
                 <button className="absolute bottom-10 px-5 py-2 border text-white font-semibold shadow-md hover:bg-gray-300 hover:text-black transition">
                     Text Drive
                 </button>
             </div>
  );
};

export default Section1;