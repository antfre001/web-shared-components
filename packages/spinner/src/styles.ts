import { createMemoClass } from '@sk-web-gui/theme';
import { cx } from '@sk-web-gui/utils';

const sizes: { [key: string]: string } = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
};

export default createMemoClass((props) => {
  const className = cx('animate-spin', sizes[props.size]);

  return className;
});
