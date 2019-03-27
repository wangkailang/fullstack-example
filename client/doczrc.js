import { css } from 'docz-plugin-css';

export default {
  dest: '../docs',
  title: 'React Components',
  description: 'This is my awesome documentation',
  themeConfig: {
    mode: 'light'
  },
  htmlContext: {
    head: {
      links:[{
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'
      }]
    }
  },
  plugins: [
    css({ preprocessor: 'postcss' }),
    css({ preprocessor: 'sass' }),
  ],
};
