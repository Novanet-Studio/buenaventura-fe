require("dotenv").config({
  path: `.env`,
})

const query = require("./queries")

module.exports = {
  siteMetadata: {
    title: `Buenaventura Tax`,
    description: `Equipo de profesionales dedicados al cálculo de impuestos y al cumplimiento de obligaciones fiscales.`,
    type: "website",
    author: `@novanetstudio`,
    siteUrl: "https://btax.netlify.app",
    image: `${process.env.SEO_IMAGE}`,
    titleTemplate: " Buenaventura Tax",
    twitterUsername: "@novanetstudio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Buenaventura Tax`,
        short_name: `Buenaventura Tax`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0e2d1d`,
        display: `standalone`,
        orientation: `portrait`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/icon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: "gatsby-plugin-intl-graphql",
      options: {
        url: process.env.API_URL || "http://localhost:1337",
        path: `${__dirname}/src/lang`,
        languages: ["en", "es"],
        defaultLanguage: "es",
        redirect: true,
        query,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        singleTypes: [
          "contacto",
          "nosotros",
          "principal",
          "servicios",
          "servicios-adicionales",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
