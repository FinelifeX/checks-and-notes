import React, { FC } from 'react';
import { Layout as LayoutBase, LayoutProps } from '@ui-kitten/components';

import { styles } from './styles';

const Layout: FC<LayoutProps> = ({ style, children, ...props }) => {
  return (
    <LayoutBase {...props} style={[styles.layout, style]}>
      {children}
    </LayoutBase>
  );
};

export default Layout;
