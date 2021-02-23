import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: 'The best pizza place in Canda Water',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin being added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'kfq87pjs',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
