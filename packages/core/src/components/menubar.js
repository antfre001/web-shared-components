module.exports = Avatar = (colors) => ({
  '.sk-menubar': {
    '@apply flex flex-row': {},
    '@apply p-8 gap-16': {},
    '@apply rounded-cards': {},

    '&[data-background="true"]': {
      '@apply bg-background-color-mixin-1': {},
    },

    '&-item': {
      '@apply inline-block': {},
      '@apply relative': {},
      '@apply h-40': {},

      '> *:first-child': {
        '@apply rounded-button-sm md:rounded-button-md xl:rounded-button-lg': {},
        '@apply cursor-pointer': {},
        '@apply bg-transparent text-dark-primary': {},
        '@apply hover:bg-tertiary-surface': {},
        '@apply font-bold': {},
        '@apply gap-2 px-14 py-8': {},
        '@apply h-full min-h-full': {},
        '@apply text-base leading-base': {},
        '@apply inline-flex shrink-0 flex-nowrap': {},

        '@apply border-0': {},
        '@apply focus-visible:bg-background-content focus-visible:ring': {},
        '&[aria-current="page"]:not(:hover)': {
          '@apply bg-primary-surface text-light-primary': {},
          '@apply focus-visible:bg-background-content focus-visible:ring': {},
          '@apply focus-visible:text-dark-primary': {},
        },
      },
      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            '> *:first-child': {
              [`@apply hover:bg-${color}-surface-accent`]: {},
              [`@apply hover:text-${color}-text-primary`]: {},
              '@apply focus-visible:bg-background-content focus-visible:ring': {},
              [`@apply focus-visible:!text-${color}-text-primary`]: {},
              '&[aria-current="page"]:not(:hover)': {
                [`@apply bg-${color}-surface-primary`]: {},
                '@apply focus-visible:bg-background-content focus-visible:ring': {},
              },
            },
          },
        }),
        {}
      ),
    },
  },
});
