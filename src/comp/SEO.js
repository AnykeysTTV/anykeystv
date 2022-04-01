import * as React from "react";
import Helmet from "react-helmet";

const SEO = () => {
  return (
    <Helmet
      htmlAttributes={{}}
      title={"Anykeys Twitch landingpage"}
      titleTemplate={""}
      meta={[
        {
          name: `keywords`,
          content:
            "twitch, anykeys, streamer, content, creator, fortnite, live, livestream, youtube, guild wars 2, maplestory, guild, wars, any, keys",
        },
        {
          name: `description`,
          content: "Content creator Anykeys landing page !",
        },
        {
          property: `og:title`,
          content: "Anykeys Twitch landingpage",
        },
        {
          property: `og:description`,
          content: "Content creator anykeys landingpage",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Anykeys4`,
        },
        {
          name: `twitter:title`,
          content: "Anykeys Twitch landingpage",
        },
        {
          name: `twitter:description`,
          content: "Content creator anykeys landingpage",
        },
      ]}
    />
  );
};

export default SEO;
