/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Subscribe } from './containers/Subscribe/Loadable';
import { ConfirmationPage } from './containers/ConfirmationPage/Loadable';

export function App() {
  const { t, i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate={`%s - ${t(translations.defaultTitle)}`}
        defaultTitle={t(translations.defaultTitle)}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route exact path={process.env.PUBLIC_URL + '/subscribe'} component={Subscribe} />
        <Route exact path={process.env.PUBLIC_URL + '/confirmation'} component={ConfirmationPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
