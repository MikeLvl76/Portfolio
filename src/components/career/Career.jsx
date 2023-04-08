import Master from "./Master";
import Bachelor from "./Bachelor";
import HighSchool from "./HighSchool";
import { useContext } from "react";
import { CareerContext } from "./CareerContext";

export default function Careers() {
  const { expandSections } = useContext(CareerContext);

  return (
    <div>
      <title>Careers</title>
      <div
        className={`flex flex-col items-start ml-5 mt-3 border border-4 border-teal-500 rounded-lg w-fit ${
          expandSections.section_1 ? "h-96" : ""
        } ease-in-out duration-500 overflow-auto`}
      >
        <h1 className="w-full text-left text-white bg-teal-500 text-2xl p-2">
          School career
        </h1>
        <div className={`flex flex-col p-2 ease-in-out duration-500`}>
          <Master />
          <Bachelor />
          <HighSchool />
        </div>
      </div>
    </div>
  );
}
