module.exports = Header = () => ({
  '.sk-header': {
    '@apply bg-background-content p-12 md:px-32 md:pt-24 md:pb-20 xl:pt-32 xl:pb-20 xl:px-80 xl:h-auto xl:min-h-0': {},
    '@apply shadow-100': {},

    '&-container': {
      '@apply flex flex-col gap-20 xl:gap-24': {},
    },

    '&-top-content': {
      '@apply flex items-center w-full justify-between m-auto flex-shrink-0 py-4 gap-20': {},
    },
    '&-bottom-content': {
      '@apply hidden md:flex items-center w-full justify-start p-8 xl:p-0': {},
    },

    'a:hover &-logotext': {
      '@apply underline': {},
    },
    'a:focus-within &-logotext': {
      '@apply outline outline-2 outline-ring': {},
    },
    '&-logotext': {
      '@apply flex flex-row items-center gap-8': {},

      '&-title': {
        '@apply pt-6 pl-[.2rem] pr-8 text-h4-sm md:text-h4-md xl:text-h4-lg font-header leading-large': {},
      },
      '&-subtitle': {
        '@apply text-small font-normal block': {},
      },
    },

    '& &-logotext': {
      '@apply text-dark-primary': {},
    },

    '&-usermenu': {
      '@apply hidden xl:flex-shrink md:flex xl:items-center xl:w-auto': {},

      '&-content': {
        '@apply relative flex flex-grow justify-end items-center xl:w-auto': {},
      },
    },
    '&-mobilemenu': {
      '@apply block md:hidden relative': {},
    },
  },
});
