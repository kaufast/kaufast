/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mywebsite.com', // Replace with your site's URL
    generateRobotsTxt: true, // Automatically generate a robots.txt file
    sitemapSize: 5000, // Split sitemap if there are more than 5000 URLs
    changefreq: 'daily', // Frequency of updates for search engines
    priority: 0.7, // Default priority of URLs
    exclude: ['/private', '/hidden'], // Exclude specific routes
    transform: async (config, path) => {
      return {
        loc: path, // URL location
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(), // Last modification date
      };
    },
  };
  