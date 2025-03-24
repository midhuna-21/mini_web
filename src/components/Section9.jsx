import CarPart8 from "../../public/carpart8.jpg";
import CarPart9 from "../../public/carpart9.jpg";
import CarPart10 from "../../public/carpart10.jpg";
import CarPart11 from "../../public/carpart11.jpg";

const Section9 = () => {
  return (
      <div className="flex w-full gap-8 mt-16 p-16 items-stretch">
                    <div className="grid grid-cols-2 gap-4 w-[60%] h-full px-12">
                        <div className="flex flex-col gap-4 h-full">
                            <img
                                src={CarPart8}
                                alt="Image 1"
                                className="w-60 h-60 object-cover"
                            />
                            <img
                                src={CarPart10}
                                alt="Image 3"
                                className="w-60 h-60 object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4 h-full px-4">
                            <img
                                src={CarPart9}
                                alt="Image 2"
                                className="w-60 h-60 object-cover"
                            />
                            <img
                                src={CarPart11}
                                alt="Image 4"
                                className="w-60 h-60 object-cover"
                            />
                        </div>
                    </div>
    
                    <div className="w-[30%] h-[497px] ml-4">
                        <img
                            src={CarPart11}
                            alt="Right Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
  );
};

export default Section9;