/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://tandartszuidbroek.nl",
  generateRobotsTxt: true,
  exclude: ["/studio", "/api/*"],
  additionalPaths: async (config) => {
    const onzePraktijk = [
      "/onze-praktijk",
      "/onze-praktijk/openingstijden",
      "/onze-praktijk/huisregels",
      "/onze-praktijk/team",
      "/onze-praktijk/kwaliteit",
      "/onze-praktijk/vacatures",
    ];
    return Promise.all(onzePraktijk.map((path) => config.transform(config, path)));
  },
};
