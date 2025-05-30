import Image from "next/image";
// import localFont from "next/font/local";
import Link from "next/link";

// const poppins = localFont({
//   src: "./fonts/Poppins-ExtraBold.ttf",
//   variable: "--font-poppins",
//   weight: "700",
// });

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-2xl font-bold`}>
            The best URL Shortener
          </p>
          <p className="">
            We are the best URL shortner in the world!
          </p>
          <div className='flex space-x-3'>
            <Link href="/shorten"><button className='bg-purple-400 shadow-lg rounded-xl py-1 font-bold p-3'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-400 shadow-lg rounded-xl py-1 font-bold p-3'>GitHub</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
