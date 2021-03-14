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
      <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="/me.jpg"
          />
        </div>
        <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
            <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
              <ul class="flex flex-col divide divide-y">
                {links.map((link) => {
                  return (
                    <Link type={link.type} name={link.name} url={link.url} />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Link = ({ type, name, url }) => {
  return (
    <li class="flex flex-row">
      <a href={url} class="block relative" target="_blank">
        <div class="select-none cursor-pointer flex flex-1 items-center p-4">
          <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <img
              alt="profil"
              src={"/icons/" + type + ".svg"}
              class="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div class="flex-1 pl-1 mr-16">
            <div class="font-medium dark:text-white">{name}</div>
          </div>
        </div>
      </a>
    </li>
  );
};
