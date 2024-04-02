export default function Experience() {
    return (
      <>
        <div className="py-10 flex justify-start">
          <div className="w-1/3 ml-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Work Experience</h1>
          </div>
          <div className="w-1/3 ml-20">
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Tesla</h2>
              <h3 className="my-2 leading-none tracking-tight text-gray-900">2023 - 2024</h3>
              <p>I worked at Tesla as a backend engineer in building internal software to facilitate manufacturing quality</p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Foxconn</h2>
              <h3 className="my-2 leading-none tracking-tight text-gray-900">2020 - 2023</h3>
              <p>I worked at Foxconn as a full stack engineer in building commercial manufacturing quality software</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Purdue VACCINE</h2>
              <h3 className="my-2 leading-none tracking-tight text-gray-900">2019 - 2020</h3>
              <p>I worked at Purdue VACCINE lab as a research assistant in prototyping interactive data visual analytic tools</p>
            </div>
          </div>
        </div>
        
        {/* dividing line */}
        <div className="mx-20 flex-grow border-t border-gray-400"></div>
        
        <div className="py-10 flex justify-start">
          <div className="w-1/3 ml-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Education</h1>
          </div>

          <div className="w-1/3 ml-20">
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Purdue University</h2>
              <h3 className="my-2 leading-none tracking-tight text-gray-900">2015 - 2019</h3>
              <p>Bachelor of Science, Computer Engineering</p>
            </div>
          </div>
        </div>

        {/* dividing line */}
        <div className="mx-20 flex-grow border-t border-gray-400"></div>

        <div className="py-10 flex justify-start">
          <div className="w-1/3 ml-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Skills</h1>
          </div>
          <div className="w-1/3 ml-20">
            <div className="mb-10 flex">
              <ul className="m-4 list-disc">
                <h3 className="font-bold">Deployment</h3>
                <li>AWS</li>
                <li>Kubernetes</li>
                <li>Docker</li>
              </ul>
              
              <ul className="m-4 list-disc">
                <h3 className="font-bold">CICD</h3>
                <li>Jenkins</li>
                <li>Github Action</li>
              </ul>
              
              <ul className="m-4 list-disc">
                <h3 className="font-bold">Backend</h3>
                <li>Python</li>
                <li>Go</li>
                <li>Node</li>
              </ul>
              
              <ul className="m-4 list-disc">
                <h3 className="font-bold">Frontend</h3>
                <li>JS/TS</li>
                <li>React/Next</li>
                <li>Vue/Nuxt</li>
                <li>Vite</li>
                <li>Tailwind</li>
              </ul>

              <ul className="m-4 list-disc">
                <h3 className="font-bold">Tools</h3>
                <li>Bash</li>
                <li>C</li>
                <li>OCaml</li>
              </ul>
            </div>
          </div>
        </div>
    </>
      
    );
  }