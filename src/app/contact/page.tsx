import Image from 'next/image'

export default function Contact() {
    return (
      <div className="flex justify-center items-center h-screen">
          <a className="m-8" href="https://github.com/chen2073">
            <Image
              src="/github.svg"
              alt="github"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
          
          <a className="m-8" href="https://www.linkedin.com/in/hao-chen-52b45a83/">
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={50}
              height={50}
              loading="lazy"
            />
          </a>
        </div>
    );
  }