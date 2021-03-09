import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { BROWSER_RESIZE } from '~/core/redux/custom/ui/types';

import Header from '../components/header/Header.container';
import Footer from '../components/footer/Footer';

interface Props {
  className?: string;
  children: any;
}

const MainLayout = ({
  className,
  children,
}: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch({ type: BROWSER_RESIZE });
    });
  }, []);

    const dummyFooterDataArray = [];
    const dummyFooterDataObject = {
      title: 'Title one',
      links: [
        {
          title: 'Link one',
          uri: 'www.google.co.uk',
        },
        {
          title: 'Link two',
          uri: 'www.google.co.uk',
        },
        {
          title: 'Link three',
          uri: 'www.google.co.uk',
        },
        {
          title: 'Link four',
          uri: 'www.google.co.uk',
        },
      ],
    };
    for (let i = 0; dummyFooterDataArray.length < 4; i++) {
      dummyFooterDataArray.push(dummyFooterDataObject);
    }



  return (
    <>
      {/* <SkipToContent /> */}
      <Header />
        <main id="main" className={className}>
          {children}
        </main>
      <Footer data={dummyFooterDataArray} />
    </>
  );
};

export default MainLayout;
