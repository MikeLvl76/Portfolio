import { useContext, useState } from "react";
import { CareerContext } from "./CareerContext";

export default function Bachelor() {
  const [selection, setSelection] = useState({
    first: true,
    second: false,
    third: false,
  });

  const { expandSections, setExpandSections } = useContext(CareerContext);

  const renderYearsButton = () => (
    <div className="flex flex-row space-x-3">
      <button
        className="bg-teal-500 rounded-lg p-2 text-white w-fit hover:bg-teal-700"
        onClick={() =>
          setSelection((prev) => ({
            ...prev,
            first: true,
            second: false,
            third: false,
          }))
        }
      >
        First year
      </button>
      <button
        className="bg-teal-500 rounded-lg p-2 text-white w-fit hover:bg-teal-700"
        onClick={() =>
          setSelection((prev) => ({
            ...prev,
            first: false,
            second: true,
            third: false,
          }))
        }
      >
        Second year
      </button>
      <button
        className="bg-teal-500 rounded-lg p-2 text-white w-fit hover:bg-teal-700"
        onClick={() =>
          setSelection((prev) => ({
            ...prev,
            first: false,
            second: false,
            third: true,
          }))
        }
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
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          >
            HTML
          </a>{" "}
          and{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
            CSS
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
          >
            Java
          </a>{" "}
          by programming with{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://processing.org/"
          >
            Processing
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Studied Physic, Chimia and Mathematics in general.
        </li>
      </ul>
    </>
  );

  const renderSecondYear = () => (
    <>
      <ul className="break-words">
        <li className="border-l-2 border-black px-2 mt-2">
          Continued learning Java.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.php.net/manual/en/intro-whatis.php"
          >
            PHP
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/C_(programming_language)"
          >
            C
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt mobile programming with{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://developer.android.com/studio"
          >
            Android Studio
          </a>
          .
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://en.wikipedia.org/wiki/SQL"
          >
            SQL
          </a>{" "}
          and its usage for database with{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.mysql.com/"
          >
            MySQL
          </a>{" "}
          and{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.postgresql.org/"
          >
            PostGreSQL
          </a>.
        </li>
        <li className="border-l-2 border-black px-2 mt-2">
          Learnt{" "}
          <a
            className="text-teal-500 hover:underline"
            href="https://www.python.org/"
          >
            Python
          </a>
          .
        </li>
      </ul>
    </>
  );

  return (
    <div
      className={`ml-2 w-max max-w-screen-sm cursor-pointer ease-in-out duration-500 ${
        expandSections.section_2
          ? "border border-2 border-teal-500 rounded-lg mb-2"
          : ""
      }`}
    >
      <div
        className={`ease-in duration-500 ${
          expandSections.section_2
            ? "bg-teal-500 text-white rounded-sm p-2 w-full"
            : ""
        }`}
        onClick={() =>
          setExpandSections((prev) => ({
            ...prev,
            section_2: !expandSections.section_2,
          }))
        }
      >
        Bachelor degree in Computer Science at{" "}
        <a
          className={`ease-in duration-500 ${
            expandSections.section_2
              ? "bg-teal-500 text-white hover:underline"
              : "text-teal-600 hover:underline"
          }`}
          href="https://www.univ-lehavre.fr/"
        >
          University of Le Havre (2021-2023)
        </a>
      </div>
      {expandSections.section_2 ? (
        <div className="ease-in-out duration-500 p-2 w-fit">
          {renderYearsButton()}
          {selection.first ? renderFirstYear() : null}
          {selection.second ? renderSecondYear() : null}
        </div>
      ) : null}
    </div>
  );
}
