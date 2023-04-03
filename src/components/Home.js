import { MdWavingHand } from 'react-icons/md';

export default function Home() {
  return (
    <div className="h-96 flex flex-col items-center justify-center">
      <title>Home</title>
      <div className="flex flex-row border border-4 border-teal-500 rounded-lg w-fit h-fit p-3 mt-5 space-x-3">
        <h1 className="text-center text-teal-500 text-bold text-5xl">Welcome</h1>
        <MdWavingHand color='#f7b82f' size={50}/>
      </div>

      <div className="mt-5 w-96">
        <p className="text-teal-500 text-bold text-xl text-center break-words">
          My name is Mickael Louvel, I'm 24 years old, I live in France and I'm
          currently studying at University of Le Havre. I love programming,
          watching football (soccer for american people) and praticing
          weightlifting.
        </p>
      </div>
    </div>
  );
}
