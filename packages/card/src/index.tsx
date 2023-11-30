//export * from './card';
import * as React from 'react';

import {
  Card as InternalCard,
  CardProps as InternalCardProps,
  CardImage,
  CardImageProps,
  CardBody,
  CardBodyProps,
  CardHeader,
  CardHeaderProps,
  CardText,
  CardTextProps,
  CardMeta,
  CardMetaProps,
  CardList,
  CardListProps,
} from './card';

interface CardProps
  extends InternalCardProps,
    React.ForwardRefExoticComponent<InternalCardProps & React.RefAttributes<HTMLElement>> {
  Image: typeof CardImage;
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Text: typeof CardText;
  Meta: typeof CardMeta;
}
const Card = InternalCard as CardProps;
Card.Image = CardImage;
Card.Body = CardBody;
Card.Header = CardHeader;
Card.Text = CardText;
Card.Meta = CardMeta;

export type { CardListProps, CardProps, CardImageProps, CardBodyProps, CardHeaderProps, CardTextProps, CardMetaProps };
export { CardList, Card };

export default Card;
