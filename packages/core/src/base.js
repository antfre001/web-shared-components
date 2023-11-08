module.exports = {
  html: {
    '@apply text-base antialiased': {},
    fontSize: '10px',
    textRendering: 'optimizeLegibility',
    touchAction: 'manipulation',
  },
  body: {
    '@apply text-base bg-background-content': {},
    '@apply text-body': {},
    position: 'relative',
    minHeight: '100%',
    fontFeatureSettings: "'kern'",
  },
  '*': {
    '@apply focus-visible:ring-ring': {},
    '@apply focus-visible:ring-offset-background-content': {},
    '@apply focus-visible:outline-0': {},
  },
  small: {
    '@apply text-small': {},
  },
  a: { '@apply rounded-button-sm md:rounded-button-md xl:rounded-button-lg': {} },
  h1: {
    '@apply text-h1-sm md:text-h1-md xl:text-h1-lg': {},
    '@apply mb-md': {},

    '+ p': {
      '@apply mb-[40px] mt-0': {},
    },
  },
  h2: {
    '@apply text-h2-sm md:text-h2-md xl:text-h2-lg': {},
  },
  h3: {
    '@apply text-h3-sm md:text-h3-md xl:text-h3-lg': {},
  },
  'h4,h5,h6': {
    '@apply text-h4-sm md:text-h4-md xl:text-h4-lg': {},
  },
  label: {
    '@apply text-label-medium': {},
  },
  p: { '@apply my-4': {} },

  '.text-content': {
    '@apply max-w-[80rem]': {},

    p: { '@apply mt-sm text-base': {} },
  },
};
