import { DefaultProps, cx } from '@sk-web-gui/utils';
import React from 'react';

export const ModalContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithRef<'div'> & DefaultProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return <div ref={ref} className={cx('sk-modal-content', className)} {...rest} />;
  }
);
