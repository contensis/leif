import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BROWSER_RESIZE } from '~/redux/ui/types';

import Header from '../components/header/Header.container';
import Footer from '../components/footer/Footer';

interface Props {
  className?: string;
  children: any;
  isLight?: boolean;
}

const MainLayout = ({ className, children, isLight = false }: Props) => {
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch({ type: BROWSER_RESIZE });
    });
  }, []);
  /* eslint-enable */

  return (
    <>
      {/* <SkipToContent /> */}
      <Header isLight={isLight} />
      <main id="main" className={className}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
