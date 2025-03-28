import redlight from "../assets/redlight.jpg";
import blackcar from "../assets/blackcar.jpg";

const Section8 = () => {
  return (
  <div className="flex w-full gap-x-20 mt-16 px-16 items-stretch">
                <div className="w-[50%] flex flex-col justify-center ml-4">
                    <img
                        src={redlight}
                        alt="Left Image"
                        className="w-full h-[80%] object-cover"
                    />
                </div>

                <div className="w-[50%] flex flex-col justify-center ml-4">
                    <img
                        src={blackcar}
                        alt="Right Image"
                        className="w-full h-[300px] object-cover"
                    />

                    <div className="mt-4">
                        <h2 className="text-2xl font-sans text-white">
                            Drive to a Sustainable Future
                        </h2>
                        <p className="text-gray-300 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut.
                        </p>
                    </div>
                </div>
            </div>

  );
};

export default Section8;