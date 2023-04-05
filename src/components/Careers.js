import { useState } from "react";

export default function Careers() {
  const [expandSections, setExpandSections] = useState({
    section_1: false,
    section_2: false,
    section_3: false,
  });

  return (
    <div>
      <title>Careers</title>
      <div
        className={`flex flex-col items-start ml-5 mt-3 border border-4 border-teal-500 rounded-lg w-fit h-fit ease-in-out duration-500`}
      >
        <h1 className="w-full text-left text-white bg-teal-500 text-2xl p-2">
          School career
        </h1>
        <div
          className={`flex flex-col p-2 ease-in-out duration-500 overflow-y-auto`}
        >
          <div
            className={`ml-2 w-max max-w-screen-sm cursor-pointer ease-in-out duration-500 ${
              expandSections.section_1
                ? "border border-2 border-teal-500 rounded-lg"
                : ""
            }`}
            onClick={() =>
              setExpandSections({ section_1: !expandSections.section_1 })
            }
          >
            <div
              className={`ease-in duration-500 ${
                expandSections.section_1
                  ? "bg-teal-500 text-white rounded-sm p-2 w-full"
                  : ""
              }`}
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
                <h2 className="bg-teal-500 rounded-lg p-2 text-white w-fit">
                  First year
                </h2>
                <ul className="break-words">
                  <li className="border-l-2 border-black px-2 mt-2">
                    Learned{" "}
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
                    Learned{" "}
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
                    Developped a CLI program in Python for manipulating and
                    extracting data from CSV in the context of a big project.
                    The objective was to treat ships travel records provided by{" "}
                    <a
                      className="text-teal-500 hover:underline"
                      href="https://en.wikipedia.org/wiki/Automatic_identification_system"
                    >
                      AIS
                    </a>{" "}
                    and allow user to extract any information he wants from one
                    or many CSV files. User cought type args defined by the
                    program and get output file as return.
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
              </div>
            ) : null}
          </div>
          <div className="ml-2 w-max">
            Bachelor degree in Computer Science at{" "}
            <a
              className="text-teal-600 hover:underline"
              href="https://www.univ-lehavre.fr/"
            >
              University of Le Havre
            </a>
          </div>
          <div className="ml-2 w-max">
            High School diploma in Sciences, speciality Biology
          </div>
        </div>
      </div>
    </div>
  );
}
