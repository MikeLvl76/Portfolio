import { useContext, useState } from "react";
import { CareerContext } from "./CareerContext";

export default function Master() {
  const { expandSections, setExpandSections } = useContext(CareerContext);

  const [firstYearSelected, setFirstYearSelected] = useState(true);

  const renderYearsButton = () => (
    <div className="flex flex-row space-x-3">
      <button
        className="bg-teal-500 rounded-lg p-2 text-white w-fit hover:bg-teal-700"
        onClick={() => setFirstYearSelected(true)}
      >
        First year
      </button>
      <button
        className="bg-teal-500 rounded-lg p-2 text-white w-fit hover:bg-teal-700"
        onClick={() => setFirstYearSelected(false)}
      >
        Last year
      </button>
    </div>
  );

  const renderFirstYear = () => (
    <>
      <ul className="break-words">
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          >
            JavaScript
          </a>{" "}
          and its frameworks{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://nodejs.org/en"
          >
            Node
          </a>{" "}
          and{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://react.dev/ "
          >
            ReactJS
          </a>
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.scala-lang.org/"
          >
            Scala
          </a>{" "}
          and discovered new programming paradigm :{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Functional_programming"
          >
            Functional Programming
          </a>
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Discovered new implementation of database by using{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Document_type_definition"
          >
            DTD
          </a>{" "}
          and XML.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Developped a CLI program in Python for manipulating and extracting
          data from CSV in the context of a big project. The objective was to
          treat ships travel records provided by{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Automatic_identification_system"
          >
            AIS
          </a>{" "}
          and allow user to extract any information he wants from one or many
          CSV files. User cought type args defined by the program and get output
          file as return.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Developped in{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://processing.org/"
          >
            Processing
          </a>{" "}
          in the context of learning data visualisation.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Introduced to{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Artificial_intelligence"
          >
            AI
          </a>
          .
        </li>
      </ul>
    </>
  );

  const renderLastYear = () => (
    <>
      <ul className="break-words">
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt new JavaScript framework :{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://expressjs.com/"
          >
            Express
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Discovered NoSQL database with{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.mongodb.com/"
          >
            MongoDB
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Viewed new mobile programming technologies such as{" "}
          <a href="https://expo.dev/" className="text-teal-500 hover:underline">
            Expo
          </a>{" "}
          and{" "}
          <a
            href="https://reactnative.dev/"
            className="text-teal-500 hover:underline"
          >
            React Native
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.docker.com/"
          >
            Docker
          </a>{" "}
          for containing apps.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Continued learning AI.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Made presentations about IoT topics like Security in IoT, etc.
        </li>
      </ul>
    </>
  );

  return (
    <div
      className={`ml-2 w-max max-w-screen-sm cursor-pointer ease-in-out duration-500 ${
        expandSections.section_1
          ? "border border-2 border-teal-500 rounded-lg"
          : ""
      }`}
    >
      <div
        className={`ease-in duration-500 ${
          expandSections.section_1
            ? "bg-teal-500 text-white rounded-sm p-2 w-full"
            : ""
        }`}
        onClick={() =>
          setExpandSections({ section_1: !expandSections.section_1 })
        }
      >
        Master degree in Computer Science at{" "}
        <a
          className={`ease-in duration-500 ${
            expandSections.section_1
              ? "bg-teal-500 text-white hover:underline"
              : "text-teal-600 hover:underline"
          }`}
          href="https://www.univ-lehavre.fr/"
        >
          University of Le Havre (2021-2023)
        </a>
      </div>
      {expandSections.section_1 ? (
        <div className="ease-in-out duration-500 p-2 w-fit">
          {renderYearsButton()}
          {firstYearSelected ? renderFirstYear() : renderLastYear()}
        </div>
      ) : null}
    </div>
  );
}
