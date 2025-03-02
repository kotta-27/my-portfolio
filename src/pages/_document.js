import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Kota Mizuno's portfolio website showcasing projects, skills, and achievements."
        />
        <meta
          name="keywords"
          content="Kota Mizuno, portfolio, developer, projects, web development"
        />
        <meta name="author" content="Kota Mizuno" />
        {/* Open Graph Meta Tags for better social sharing */}
        <meta property="og:title" content="Kota Mizuno Portfolio" />
        <meta
          property="og:description"
          content="Explore the projects and skills of Kota Mizuno, a web developer."
        />
        <meta
          property="og:url"
          content="https://my-portfolio-murex-eight-71.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />{" "}
        {/* Replace with your image URL */}
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kota Mizuno Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the projects and skills of Kota Mizuno."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />{" "}
        {/* Replace with your image URL */}
        <title>Kota Mizuno</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Caveat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css" />
        <meta
          name="google-site-verification"
          content="Tbiw4HEy5H_jcbsJBpsMZKTFcb6L1LCoWdKMkYiKUZI"
        />
        <script
          src="https://kit.fontawesome.com/e64ae804d4.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
