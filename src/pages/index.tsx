import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import StudyingPicture from "../../public/images/studying-picture.svg";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learn Flashcards</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={"mt-16 flex flex-col items-center gap-16 px-4 text-center"}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Learn Anything</h1>
            <h2 className="text-3xl font-bold">by Active Recall</h2>
          </div>

          <h3 className="text-2xl font-bold text-white text-opacity-90">
            Use the power of active recall
            <br /> to{" "}
            <span
              className={
                "relative text-white after:absolute after:left-0 after:flex after:h-0.5 after:w-full after:origin-left after:animate-grow-x after:bg-orange-500"
              }
            >
              improve your grade.
            </span>
          </h3>
        </div>

        <Image src={StudyingPicture} alt={"Studying Picture"} />

        <div className="flex w-full flex-col gap-4">
          <p className="font-bold text-white text-opacity-90">
            What are you waiting for?
          </p>

          <Link
            href={"/app"}
            className="w-full rounded-md bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600 active:bg-orange-700"
          >
            Start Studying
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
