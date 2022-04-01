import * as React from "react";
import { TwitchEmbed } from "react-twitch-embed";
import Iframe from "react-iframe";


const Discord = () => {
  return ( 
    <Iframe
      url={`https://discord.com/widget?id=${process.env.REACT_APP_DISCORD_GUILD_ID}&theme=dark`}
      height="auto"
      width="auto"
      frameBorder="0"
      sandbow="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
    />
  );
};


const TwitchStream = () => {
  return (
    <TwitchEmbed
      channel={`${process.env.REACT_APP_TWITCH_CHANNEL}`}
      id={process.env.REACT_APP_TWITCH_CHANNEL}
      theme="dark"
      width="32vw"
      height="32vh"
    />
  );
};

const Stream = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.8vw",
        justifyContent: "center",
      }}
    >
      <TwitchStream /> <Discord />
    </div>
  );
};

export default Stream;
