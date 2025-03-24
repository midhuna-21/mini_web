import CarPart4 from "../assets/CarPart4.jpg";
import CarPart5 from "../assets/CarPart5.jpg";
import CarPart6 from "../assets/CarPart6.jpg";
import CarPart7 from "../assets/CarPart7.jpg";

const Section11 = () => {
  return (
   <div className="w-full py-16 px-8">
                <h2 className="text-4xl font-sans text-white mb-10">
                    Our Stories
                </h2>

                <div className="grid grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <img
                            src={CarPart4}
                            alt="Story 1"
                            className="w-60 h-60 object-cover"
                        />
                        <p className="text-xl font-sans text-white mt-4 py-3">
                            Lorem Ipsum
                        </p>
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempo
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <img
                            src={CarPart5}
                            alt="Story 2"
                            className="w-60 h-60 object-cover"
                        />
                        <p className="text-xl font-sans text-white mt-4 py-3">
                            Lorem Ipsum
                        </p>
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <img
                            src={CarPart6}
                            alt="Story 3"
                            className="w-60 h-60 object-cover"
                        />
                        <p className="text-xl font-sans text-white mt-4 py-3">
                            Lorem Ipsum
                        </p>
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <img
                            src={CarPart7}
                            alt="Story 4"
                            className="w-60 h-60 object-cover"
                        />
                        <p className="text-xl font-sans text-white mt-4 py-3">
                            Lorem Ipsum
                        </p>
                        <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                        </p>
                    </div>
                </div>
            </div>

  );
};

export default Section11;