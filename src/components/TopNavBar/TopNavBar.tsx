import { Divider, TopNavigation } from '@ui-kitten/components';
import React, { FC } from 'react';

type Props = {
  title: string;
  textAlignment?: 'start' | 'center';
};

export const TopNavBar: FC<Props> = ({ title, textAlignment }) => {
  return (
    <>
      <TopNavigation title={title} alignment={textAlignment} />
      <Divider />
    </>
  );
};
