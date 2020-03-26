import React from 'react';

import { AppWrapper, PageWrapper } from './styled';

import { Header, Footer } from '..';

interface Props {
    children: React.ReactNode
}
export const BaseLayout = (props: Props) => {
  return (
    <AppWrapper>
      <Header />
      <PageWrapper>{props.children}</PageWrapper>
      <Footer />
    </AppWrapper>
  );
};
