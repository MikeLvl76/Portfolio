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
      <div className="flex flex-col items-center ml-5 mt-5 border border-4 border-teal-500 rounded-lg w-1/2 h-fit">
        <h1 className="w-full text-left text-white bg-teal-500 text-2xl p-2">
          School career
        </h1>
        <div className={"grid grid-cols-2 gap-2 mt-3 text-l p-2"}>
          <div
            className={`ml-5 w-max max-w-screen-sm cursor-pointer ${
              expandSections.section_1
                ? "border border-2 border-teal-500 rounded-lg"
                : ""
            }`}
            onClick={() =>
              setExpandSections({ section_1: !expandSections.section_1 })
            }
          >
            <div
              className={`${
                expandSections.section_1
                  ? "bg-teal-500 text-white rounded-sm p-2 w-full"
                  : ""
              }`}
            >
              Master degree in Computer Science at{" "}
              <a
                className={`${
                  expandSections.section_1
                    ? "bg-teal-500 text-white hover:underline"
                    : "text-teal-600 hover:underline"
                }`}
                href="https://www.univ-lehavre.fr/"
              >
                University of Le Havre
              </a>
            </div>
            {expandSections.section_1 ? (
              <div className="p-2 overflow-y-auto w-fit">
                <div className="border border-2 border-teal-500 rounded-lg p-2">
                  <h2 className="bg-teal-500 rounded-lg p-2 text-white w-fit">
                    First year
                  </h2>
                  <p className="break-words border-l-2 border-black px-2 mt-2">
                    Learned{" "}
                    <a
                      className="text-teal-500 hover:underline"
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    >
                      JavaScript
                    </a>{" "}
                    and specially the framework{" "}
                    <a
                      className="text-teal-500 hover:underline"
                      href="https://nodejs.org/en"
                    >
                      Node
                    </a>{" "}
                    commonly used as back-end for web development and as package
                    manager. Turns out I'm still using Node because it's very
                    useful for installing other frameworks or packages. I
                    recommend also{" "}
                    <a
                      className="text-teal-500 hover:underline"
                      href="https://github.com/nvm-sh/nvm"
                    >
                      Node Version Manager
                    </a>{" "}
                    in case of installing specific Node version and its ease to use.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="border-l-2 border-black px-5 col-end-5">
            2021-2023
          </div>
          <div className="ml-5 w-max">
            Bachelor degree in Computer Science at{" "}
            <a
              className="text-teal-600 hover:underline"
              href="https://www.univ-lehavre.fr/"
            >
              University of Le Havre
            </a>
          </div>
          <div className="border-l-2 border-black px-5 col-end-5">
            2017-2021
          </div>
          <div className="ml-5 w-max">
            High School diploma in Sciences, speciality Biology
          </div>
          <div className="border-l-2 border-black px-5 col-end-5">2017</div>
        </div>
      </div>
    </div>
  );
}
