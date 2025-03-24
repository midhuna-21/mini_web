import CarPart1 from "../assets/CarPart1.jpg";
import CarPart2 from "../assets/carPart2.jpg";
import CarPart3 from "../assets/CarPart3.jpg";

const Section7 = () => {
  return (
   <div className="flex justify-center items-center gap-24 py-10">
                <div className="flex flex-col items-center">
                    <img
                        src={CarPart1}
                        alt="Design"
                        className="w-72 h-48 object-cover"
                    />
                    <p className="text-xl font-sans text-white mt-5">
                        Impeccable Design
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={CarPart2}
                        alt="Performance"
                        className="w-72 h-48 object-cover"
                    />
                    <p className="text-xl font-sans text-white mt-5">
                        Elevated Performance
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={CarPart3}
                        alt="Interiors"
                        className="w-72 h-48 object-cover"
                    />
                    <p className="text-xl font-sans text-white mt-5">
                        Great Interiors
                    </p>
                </div>
            </div>

  );
};

export default Section7;