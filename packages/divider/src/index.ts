import { Divider as InternalDivider, DividerProps as InternalDividerProps } from './divider';
import { DividerSection, DividerSectionProps } from './divider-section';

interface DividerProps extends React.ForwardRefExoticComponent<InternalDividerProps> {
  Component: typeof InternalDivider;
  Section: typeof DividerSection;
}

export const Divider = {
  ...InternalDivider,
  Component: InternalDivider,
  Section: DividerSection,
} as DividerProps;

export type { DividerProps, DividerSectionProps };
export default Divider;
