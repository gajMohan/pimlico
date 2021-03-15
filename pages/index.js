import Head from "next/head";

export default function Home(props) {
  console.log(props);
  return (
    <section class="text-gray-700 body-font">
      <Head>
        <title>{props.personal.name.short}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HKMRNQH6G5"
        ></script>
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
              <p class="text-2xl text-gray-800 dark:text-white">
                {props.personal.name.short}
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light">
                {props.personal.location}
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                {props.personal.description}
              </p>
            </div>
            <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
              {props.personal.links.map((link) => {
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

async function fetchData() {
  const res = await fetch(`https://data.gajmohan.dev/personal.json`);

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}

export async function getStaticProps({ params }) {
  const personal = await fetchData();
  return {
    props: {
      personal,
    },
  };
}
