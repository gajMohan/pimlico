import Head from "next/head";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home(props) {
  let msg =
    "%c Hi 👋🏾! Welcome to my site! \n" +
    JSON.stringify(props.personal, null, 1);
  let styles = [
    "font-size: 12px",
    "font-family: monospace",
    "background: white",
    "display: inline-block",
    "color: black",
    "padding: 8px 19px",
    "border: 1px dashed;",
  ].join(";");
  console.log(msg, styles);

  return (
    <section className="text-gray-700 body-font">
      <Head>
        <title>{props.personal.name.short}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.personal.description} />
      </Head>
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={props.personal.image}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <div className="">
            <div className="text-center">
              <div>
                <p className="text-2xl text-gray-800 dark:text-white">
                  {props.personal.name.short}
                  <p
                    className="text-sm text-gray-500 dark:text-gray-400 font-light"
                    itemProp="name"
                  >
                    {props.personal.name.firstName}{" "}
                    {props.personal.name.lastName}
                  </p>
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                  {props.personal.description}
                </p>
              </div>
              <p className="text-xl text-gray-500 dark:text-gray-200 font-light">
                <FontAwesomeIcon icon={faMapMarker} /> {props.personal.location}
              </p>
              <br />
            </div>
            <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
              {props.personal.links.map((link) => {
                return <Link key={link.type} type={link.type} url={link.url} />;
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
    <a href={url} className="text-4xl" rel="me">
      {type == "github" && <FontAwesomeIcon icon={faGithub} />}
      {type == "twitter" && <FontAwesomeIcon icon={faTwitter} />}
      {type == "linkedin" && <FontAwesomeIcon icon={faLinkedin} />}
      {type == "instagram" && <FontAwesomeIcon icon={faInstagram} />}
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
