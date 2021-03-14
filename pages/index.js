import Head from "next/head";

export default function Home() {
  const links = [
    {
      type: "twitter",
      name: "@inspectorgajit",
      url: "https://twitter.com/Inspectorgajit",
    },
    {
      type: "linkedin",
      name: "Inspectorgajit",
      url: "https://twitter.com/Inspectorgajit",
    },
    {
      type: "github",
      name: "Github",
      url: "https://twitter.com/Inspectorgajit",
    },
  ];
  return (
    <section class="text-gray-700 body-font">
      <Head>
        <title>Gaj Mohan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/me.jpg"
          />
        </div>
        <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <div class="">
            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white">Gaj Mohan</p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                London
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Senior Backend Engineer, Football fanatic, Full time geek
              </p>
            </div>
            <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
              {links.map((link) => {
                return <Link type={link.type} url={link.url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Link = ({ type, url }) => {
  return (
    <a href={url}>
      <img
        alt="profil"
        src={"/icons/" + type + ".svg"}
        class="mx-auto object-cover rounded-full h-10 w-10 "
      />
    </a>
  );
};
