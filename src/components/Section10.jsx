import Airx3Image from "../../public/airx3.jpg";

const Section10 = () => {
  return (
       <div
                className="w-full h-[80vh] flex items-end bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${Airx3Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="w-[50%] flex flex-col justify-end pb-16 pl-16 px-8 relative z-10">
                    <h2 className="text-5xl font-sans text-white">Air X</h2>
                    <h3 className="text-3xl font-sans text-white mt-2 py-2">
                        Accelerate into a New Era
                    </h3>
                    <div className="mt-6 flex gap-4">
                        <button className="px-6 py-2 text-white font-sans  hover:bg-white hover:text-black">
                            Order Now
                        </button>
                        <button className="px-6 py-2 text-white font-sans hover:bg-white hover:text-black transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

  );
};

export default Section10;