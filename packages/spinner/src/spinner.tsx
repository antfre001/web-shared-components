import { DefaultProps } from '@sk-web-gui/utils';
import { cx, __DEV__ } from '@sk-web-gui/utils';
import * as React from 'react';

export interface ISpinProps extends DefaultProps {
  /** Set size of the spinner
   * @default 16
   */
  size?: number;

  /** Set color of the spinner
   * @default tertiary
   */
  colors?: 'tertiary' | 'vattjom' | 'gronsta' | 'bjornstigen' | 'juniskar';
}

export interface SpinProps extends React.HTMLAttributes<SVGSVGElement>, ISpinProps {}

export const Spinner = React.forwardRef<SVGSVGElement, SpinProps>((props, ref) => {
  const { size = 16, colors = 'tertiary', className, ...rest } = props;
  console.log('Color: ', colors);

  return (
    <svg
      className="sk-spinner"
      style={{ width: `${size}px`, height: `${size}px` }}
      data-color={colors ? colors : undefined}
    >
      <circle style={{ r: `${size / 2}px` }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="-90;810"
          keyTimes="0;1"
          dur="4s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke-dashoffset"
          values="0%; 0%; -157%"
          calcMode="spline"
          keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.9, 0"
          keyTimes="0;0.25;1"
          dur="4s"
          repeatCount="indefinite"
        ></animate>

        <animate
          attributeName="stroke-dasharray"
          values="0% 314%; 257% 157%; 0% 300%"
          calcMode="spline"
          keySplines="0.81, 1, 0.82, 1; 0.52, 0, 0.39, 0"
          keyTimes="0;0.25;1"
          dur="4s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );
});

if (__DEV__) {
  Spinner.displayName = 'Spinner';
}

export default Spinner;
