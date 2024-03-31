import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hello!</h1>
      <h2 className="text-2xl font-bold">About Me</h2>
      <p>My name is Hao Chen (aka, James). I am a software engineer with 5 year industry experience, skilled in this...</p>
      <div className="flex ...">
        <Link href="/experience">
          <div className="h-40 w-40 m-8 p-9 rounded-full bg-amber-500 border-2 border-solid border-black flex items-center">Experience</div>
        </Link>
        <Link href="/projects">
          <div className="h-40 w-40 m-8 p-12 rounded-full bg-red-500 border-2 border-solid border-black flex items-center">Projects</div>
        </Link>
        <Link href="/contact">
          <div className="h-40 w-40 m-8 p-12 rounded-full bg-cyan-300 border-2 border-solid border-black flex items-center">Contact</div>
        </Link>
      </div>
    </div>

  );
}
