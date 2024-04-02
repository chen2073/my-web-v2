import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/5">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Hello!</h1>
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>{"I'm a software engineer with five years of industry experience, specialize in building web application(frontend, backend). \
          My interest lies within building high-quality software tools to enhance productivity, with a keen focus on optimizing software efficiency(minimizing CPU and RAM usage). \
          A fun fact about me is my love for functional programming, where I am currently self learning OCaml..."}
        </p>
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
    </div>
  );
}
