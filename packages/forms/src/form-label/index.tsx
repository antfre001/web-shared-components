import { DefaultProps } from '@sk-web-gui/utils';
import { cx, __DEV__ } from '@sk-web-gui/utils';
import * as React from 'react';

import { useFormControl } from '../form-control';

interface IFormLabelProps extends DefaultProps {
  disabled?: boolean;
  children?: React.ReactNode;
  htmlFor?: string;
  showRequired?: boolean;
  as?: React.ElementType;
}

interface IFormLabelRegularProps extends React.HTMLAttributes<HTMLLabelElement>, IFormLabelProps {}
interface IFormLabelFieldsetProps extends React.HTMLAttributes<HTMLLegendElement>, IFormLabelProps {}
export type FormLabelProps = IFormLabelFieldsetProps | IFormLabelRegularProps;

export const FormLabel = React.forwardRef<any, FormLabelProps>((props, ref) => {
  const { children, className, htmlFor, id, showRequired = false, as, ...rest } = props;
  const formControl = useFormControl(rest);

  const classes = cx('form-label', formControl.disabled && 'form-label-disabled', className);

  const getComp = (): React.ElementType => {
    switch (formControl.fieldset) {
      case true:
        return 'legend';
      case false:
        return 'label';
      default:
        return 'label';
    }
  };

  const Comp = as || getComp();

  return (
    <Comp
      ref={ref}
      className={classes}
      htmlFor={htmlFor || (!formControl.fieldset ? formControl.id : undefined)}
      id={id || formControl.labelId}
      {...rest}
    >
      {children}
      {formControl.required && showRequired && <RequiredIndicator />}
    </Comp>
  );
});

if (__DEV__) {
  FormLabel.displayName = 'FormLabel';
}

export const RequiredIndicator = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    const classes = cx('form-required-indicator', className);

    return <span ref={ref} className={classes} aria-hidden="true" children="*" {...rest} />;
  }
);

if (__DEV__) {
  RequiredIndicator.displayName = 'RequiredIndicator';
}

export default FormLabel;
