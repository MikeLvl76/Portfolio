export default function Careers() {
  return (
    <div>
      <title>Careers</title>
      <div className="flex flex-col items-center mx-auto mt-5 border border-4 border-teal-500 rounded-lg w-3/4 h-64">
        <h1 className="w-full text-center text-white bg-teal-500 text-2xl">
          School career
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-5 text-xl">
          <div>
            Master degree in Computer Science at{" "}
            <a className="hover:underline" href="https://www.univ-lehavre.fr/">
              University of Le Havre
            </a>
          </div>
          <div className="border-l-2 border-black px-5 col-end-5">
            2021-2023
          </div>
          <div>
            Bachelor degree in Computer Science at{" "}
            <a className="hover:underline" href="https://www.univ-lehavre.fr/">
              University of Le Havre
            </a>
          </div>
          <div className="border-l-2 border-black px-5 col-end-5">
            2017-2021
          </div>
          <div>High School diploma in Sciences, speciality Biology</div>
          <div className="border-l-2 border-black px-5 col-end-5">2017</div>
        </div>
      </div>
    </div>
  );
}
