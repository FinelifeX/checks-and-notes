import React, { FC } from 'react';
import { Divider, TopNavigation } from '@ui-kitten/components';

type Props = {
  title: string;
  textAlignment?: 'start' | 'center';
};

const TopNavBar: FC<Props> = ({ title, textAlignment }) => {
  return (
    <>
      <TopNavigation title={title} alignment={textAlignment} />
      <Divider />
    </>
  );
};

export default TopNavBar;
