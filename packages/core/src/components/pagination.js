module.exports = Pagination = () => ({
  '.pagination': {
    '@apply select-none': {},

    '&-sm': {
      '@apply text-xs': {},
    },

    '&-md': {
      '@apply text-lg': {},
    },

    '&-lg': {
      '@apply text-xl': {},
    },

    '&-list': {
      '@apply flex items-center': {},
    },

    '&-pageLabel': {
      '@apply cursor-pointer m-sm box-content': {},
      width: '1.5em',
      height: '1.75em',

      "&[aria-disabled='true']": {
        '@apply border-primary border-b cursor-default text-primary': {},
      },
    },

    '&-prevNextButton': {
      '@apply text-body ml-4 my-sm inline-flex items-center sm:w-auto inline-flex flex-row leading-none': {},
      height: '1.75em',

      '&[data-reverse=true]': {
        '@apply mr-4 ml-0 flex-row-reverse': {},

        '.pagination-prevNextButton-label': {
          '@apply mr-sm ml-0': {},
        },
      },

      '&[disabled]': {
        '@apply opacity-50 cursor-default': {},
      },

      "&[disabled='false']": {
        '&-label, &-icon': {
          '@apply cursor-pointer': {},
        },
      },

      '&-label': {
        '@apply hidden sm:inline ml-sm leading-none': {},
      },

      '&-icon': {
        '@apply m-1 leading-none flex items-center': {},

        '.MuiSvgIcon-root': {
          fontSize: '1em',
        },
      },
    },

    '&-ellipsis': {
      '@apply inline-block w-16 text-center': {},
    },
  },
});
