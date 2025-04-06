module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "/video/**", // Match all videos, not just a specific folder
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};
