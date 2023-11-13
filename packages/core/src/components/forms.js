function fieldOutline(colors) {
  return {
    '&-outline': {
      '@apply border shadow-sm border-gray-stroke': {},
      '@apply text-gray bg-white': {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply focus-visible:border-${color}-text`]: {},
          },
        }),
        {}
      ),

      '&[aria-invalid=true]': {
        '@apply border-error ring': {},

        '&:focus-visible': {
          '@apply border-error ring': {},
        },
      },
    },
  };
}

function fieldSolid(colors) {
  return {
    '&-solid': {
      '@apply border border-transparent': {},
      '@apply text-black bg-gray-light': {},

      ...colors.reduce(
        (styles, color) => ({
          ...styles,
          [`&[data-color="${color}"]`]: {
            [`@apply focus-visible:border-${color}-text`]: {},
          },
        }),
        {}
      ),

      '&[aria-invalid=true]': {
        '@apply border-error ring': {},

        '&:focus-visible': {
          '@apply border-error ring': {},
        },
      },
    },
  };
}

function formControl() {
  return {
    '.sk-form-control': {
      '@apply w-full relative flex flex-col gap-8': {},
    },
    '.form-helper-text': {
      '@apply leading-none text-gray': {},
    },
    '.form-error-message': {
      '@apply leading-none flex items-center text-small text-error': {},
    },
    '.sk-form-label': {
      '@apply text-left align-middle block': {},
      '&&-lg': {
        '@apply text-label-large': {},
      },
      '&&-md': {
        '@apply text-label-medium': {},
      },
      '&&-sm': {
        '@apply text-label-small': {},
      },
    },
    '.form-required-indicator': {
      '@apply ml-1 text-small': {},
      '--tw-text-opacity': '1',
      color: 'rgba(239, 68, 68, var(--tw-text-opacity))',
      '.dark &': {
        '--tw-text-opacity': '1',
        color: 'rgba(252, 165, 165, var(--tw-text-opacity))',
      },
    },
  };
}

function formInputGroup() {
  return {
    '.form-input-group': {
      '@apply flex relative bg-white h-fit w-full rounded-[0.2rem] border border-gray-stroke': {},

      '&:focus-within': {
        '@apply border border-primary ring': {},
      },

      '> *': {
        '@apply border-0 ring-0 shadow-none': {},

        '&:focus': {
          '@apply ring-0': {},
        },
      },

      '&-sm': {
        '@apply min-h-[4rem] max-h-[4rem]': {},

        '.form-field': {
          '@apply min-h-[3.8rem] max-h-[3.8rem]': {},
        },
      },

      '&-md': {
        '@apply min-h-[4.4rem] max-h-[4.4rem]': {},

        '.form-field': {
          '@apply min-h-[4.2rem] max-h-[4.2rem]': {},
        },
      },

      '&-lg': {
        '@apply min-h-[4.8rem] max-h-[4.8rem]': {},

        '.form-field': {
          '@apply min-h-[4.6rem] max-h-[4.6rem]': {},
        },
      },

      "&[data-rounded='true']": {
        '@apply rounded-[3.2rem]': {},

        '> *:first-child': {
          '@apply rounded-[3.2rem]': {},
        },

        '> *:last-child': {
          '@apply rounded-[3.2rem]': {},
        },
      },

      '&[aria-invalid=true]': {
        '@apply border-error ring-error': {},
      },
    },

    '.form-input-element': {
      '@apply flex items-center justify-center absolute z-base top-0': {},

      '&-sm': {
        '@apply text-xs h-7 w-7': {},
      },

      '&-md': {
        '@apply text-small h-8 w-8': {},
      },

      '&-lg': {
        '@apply text-base h-10 w-10': {},
      },
    },

    '.form-input-addon': {
      '@apply flex items-center w-auto shadow-sm whitespace-nowrap': {},
      '@apply text-gray bg-neutral-50': {},

      '&-sm': {
        '@apply px-3 text-xs': {},
      },

      '&-md': {
        '@apply px-4 text-small': {},
      },

      '&-lg': {
        '@apply px-4 text-base': {},
      },

      '&-left': {
        '@apply rounded-r-none': {},
      },

      '&-right': {
        '@apply rounded-l-none': {},
      },
    },
    '.form-input-addin': {
      '@apply flex items-center w-auto whitespace-nowrap': {},
      '@apply text-body': {},

      '&-sm': {
        '@apply px-[1.44rem] text-xs': {},
      },

      '&-md': {
        '@apply px-[1.6rem] text-small': {},
      },

      '&-lg': {
        '@apply px-[1.76rem] text-base': {},
      },

      '&-left': {
        '@apply pr-0 rounded-r-none': {},
      },

      '&-right': {
        '@apply pl-0 rounded-l-none': {},
      },
    },
  };
}

module.exports = Forms = (colors) => ({
  '.form-field': {
    '@apply rounded-[0.2rem] placeholder-gray-stroke': {},
    '@apply relative w-full min-w-0 inline-flex items-center appearance-none focus-visible:outline-none': {},
    '@apply transition-colors	duration-75 ease-out': {},

    '&-sm': {
      '@apply text-small': {},
      '@apply py-0 px-[1.44rem] min-h-[4rem] max-h-[4rem]': {},
    },

    '&-md': {
      '@apply text-base leading-base': {},
      '@apply py-0 px-[1.6rem] min-h-[4.4rem] max-h-[4.4rem]': {},
    },

    '&-lg': {
      '@apply text-base leading-large': {},
      '@apply py-0 px-[1.76rem] min-h-[4.8rem] max-h-[4.8rem]': {},
    },

    '&-disabled, &&-disabled': {
      '@apply disabled:cursor-not-allowed cursor-not-allowed': {},
      '@apply disabled:bg-gray-lighter bg-gray-lighter': {},
    },

    "&[data-rounded='true']": {
      '@apply rounded-[3.2rem]': {},
    },

    // variants
    ...fieldOutline(colors),
    ...fieldSolid(colors),
  },

  '.form-button': {
    '@apply text-[1.1433em] border-0 ml-auto text-primary hover:text-white': {},

    '&[data-icon=true]': {
      '@apply p-[0.2em]': {},
    },

    '&-icon': {
      '@apply inline-flex': {},
    },

    '&-wrapper': {
      '@apply flex items-center absolute inset-y-0 right-sm': {},
    },
  },

  '.form-textarea': {
    maxHeight: 'none',
    '&.form-field': {
      '&-sm': {
        '@apply py-[0.85rem] min-h-[4rem]': {},
      },

      '&-md': {
        '@apply py-[0.9rem] min-h-[4.4rem]': {},
      },

      '&-lg': {
        '@apply py-[1.1rem] min-h-[4.8rem]': {},
      },
    },
    '&-counter': {
      '@apply mt-xs text-right': {},
    },
  },
  '.dropdown-search': {
    '@apply block w-full relative': {},
    '&-results': {
      '@apply w-full flex justify-between items-center': {},
      '&-text': {
        '@apply truncate text-left grow': {},
      },
      '&-counter': {
        '@apply grow-0': {},
      },
    },

    '&[data-expanded=true]': {
      '.form-input-group[data-rounded=true]': {
        '@apply rounded-t-[2rem] rounded-bl-none rounded-br-none': {},

        '> *:first-child': {
          '@apply rounded-t-[2rem] rounded-bl-none rounded-br-none': {},
        },

        '> *:last-child': {
          '@apply rounded-t-[2rem] rounded-bl-none rounded-br-none': {},
        },

        '& ~ #dropdown-search-results': {
          '@apply rounded-b-[1.6rem]': {},
        },
      },
    },
  },

  '.form-select-list-transition': {
    '@apply absolute z-50 w-full bg-white shadow-lg max-h-60 rounded-utility py-1 text-base ring overflow-auto focus:outline-none sm:text-small':
      {},
    '&.showabove': {
      '@apply mb-1 bottom-full': {},
    },
    '&:not(.showabove)': {
      '@apply mt-1 top-full': {},
    },
  },

  '.form-select': {
    '@apply justify-between items-center grow text-body bg-white caret-transparent select-none cursor-pointer border-gray-stroke':
      {},
    'background-image': 'none',
    '&-wrapper': {
      '@apply block w-full relative': {},
    },
    '&-icon': {
      '@apply grow-0': {},
    },
    '&-list': {
      '@apply z-10 absolute overflow-y-auto w-full bg-white mt-0 border border-gray-stroke border-t-0 border-b': {},
      '&.showabove': {
        '@apply border-t border-b-0': {},
      },
    },
    '&-has-multiple-choices': {
      '@apply flex w-full h-full justify-between items-center pr-md': {},
    },
    '&-multiple-chioces': {
      '@apply truncate pr-md': {},
    },

    '&-option': {
      '@apply text-body rounded-none cursor-default hover:text-white focus-visible:text-white hover:bg-primary focus-visible:bg-primary flex items-center':
        {},

      '&.multiple.selected': {
        '@apply bg-background-one': {},
      },
      '&.active': {
        '@apply bg-primary text-white': {},
      },
      '&.active.selected': {
        '@apply bg-gray text-white': {},
      },
      '&.disabled': {
        '@apply opacity-75 cursor-not-allowed hover:bg-white hover:text-black': {},
      },
      '&-remove-button': {
        '@apply w-full flex justify-between items-center': {},
        '&-text': {
          '@apply truncate grow text-left': {},
        },
      },
    },
  },

  ...formInputGroup(),
  ...formControl(),
});
