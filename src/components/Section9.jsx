import map from "../assets/map.jpg";
import meter from "../assets/meter.jpg";
import speed from "../assets/speed.jpg";
import frontlight from "../assets/frontlight.jpg";

const Section9 = () => {
  return (
      <div className="flex w-full gap-8 mt-16 p-16 items-stretch">
                    <div className="grid grid-cols-2 gap-4 w-[60%] h-full px-12">
                        <div className="flex flex-col gap-4 h-full">
                            <img
                                src={map}
                                alt="Image 1"
                                className="w-60 h-60 object-cover"
                            />
                            <img
                                src={speed}
                                alt="Image 3"
                                className="w-60 h-60 object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4 h-full px-4">
                            <img
                                src={meter}
                                alt="Image 2"
                                className="w-60 h-60 object-cover"
                            />
                            <img
                                src={frontlight}
                                alt="Image 4"
                                className="w-60 h-60 object-cover"
                            />
                        </div>
                    </div>
    
                    <div className="w-[30%] h-[497px] ml-4">
                        <img
                            src={frontlight}
                            alt="Right Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
  );
};

export default Section9;