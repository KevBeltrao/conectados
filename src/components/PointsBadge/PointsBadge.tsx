import { type FC, type PropsWithChildren } from 'react';

import { Container } from './styles';

interface PointsBadgeTypes extends PropsWithChildren {}

const PointsBadge: FC<PointsBadgeTypes> = ({ children }) => (
  <Container>{children}</Container>
);

export default PointsBadge;
