import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import { translations } from 'locales/translations';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ConfirmationPage() {
  const { t } = useTranslation();
 
  const  {state} = useLocation();
  useEffect(()=>{
    console.log(state);
    
  }, []);
  return (
    <>
      <Helmet>
        <title>{t(translations.homepage.title)}</title>
        <meta
          name="description"
          content="confirmation page as asked"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
      <p>{JSON.stringify(state)}</p>
      
      </PageWrapper>
    </>
  );
}