export default function Experience() {
    return (
      <>
        <div className="py-10 flex justify-between">
          <div className="mx-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Work Experience</h1>
          </div>
          <div className="mx-80">
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Tesla</h2>
              <p>I worked at Tesla for about 1 year</p>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Foxconn</h2>
              <p>I worked at Foxconn for about 1 year</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Purdue VACCINE</h2>
              <p>I worked at Purdue VACCINE lab as a research assistant/software developer for about 1.5 years</p>
            </div>
          </div>
        </div>
        
        {/* dividing line */}
        <div className="mx-20 flex-grow border-t border-gray-400"></div>
        
        <div className="py-10 flex justify-between">
          <div className="mx-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Education</h1>
          </div>
          <div className="mx-80">
            <div className="mb-10">
              <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900">Purdue University</h2>
              <p>Bachelor of Science, Computer Engineering</p>
            </div>
          </div>
        </div>

        {/* dividing line */}
        <div className="mx-20 flex-grow border-t border-gray-400"></div>

        <div className="py-10 flex justify-between">
          <div className="mx-80">
            <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900">Skills</h1>
          </div>
          <div className="mx-80">
            <div className="mb-10">
              <ul>
                <li>AWS</li>
                <li>Python, GO</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
    </>
      
    );
  }