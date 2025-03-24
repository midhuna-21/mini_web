import steering from "../assets/steering.jpg";
import elaveted from "../assets/elaveted.jpg";
import interiors from "../assets/interiors.jpg";

const Section7 = () => {
  return (
   <div className="flex justify-center items-center gap-24 py-10">
                <div className="flex flex-col items-center">
                    <img
                        src={steering}
                        alt="Design"
                        className="w-72 h-48 object-cover"
                    />
                    <p className="text-xl font-sans text-white mt-5">
                        Impeccable Design
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src={elaveted}
                        alt="Performance"
                        className="w-72 h-48 object-cover"
                    />
                    <p className="text-xl font-sans text-white mt-5">
                        Elevated Performance
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={interiors}
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