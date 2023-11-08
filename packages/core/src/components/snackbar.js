module.exports = Snackbar = () => ({
  '.sk-snackbar': {
    '@apply flex items-center gap-12 py-8 pl-16 pr-8 rounded-groups break-words max-w-[40rem]': {},
    '@apply text-label-small text-vattjom-text-secondary': {},

    '&-text': {
      '@apply flex-grow': {},
    },

    '&-content': {
      '@apply flex-grow gap-12 py-4 flex items-center': {},
    },

    '&-info': {
      '@apply text-vattjom-text-secondary bg-vattjom-surface-primary': {},
    },
    '&-success': {
      '@apply text-gronsta-text-secondary bg-gronsta-surface-primary': {},
    },
    '&-warning': {
      '@apply text-warning-text-secondary bg-warning-surface-primary': {},
    },
    '&-error': {
      '@apply text-error-text-secondary bg-error-surface-primary': {},
    },
  },
});
