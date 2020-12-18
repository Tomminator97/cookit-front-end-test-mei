import * as React from 'react';
import styled from 'styled-components/macro';
import { NavBar } from 'app/containers/NavBar';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';

import { FormLabel } from 'app/components/FormLabel';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';

import { useState } from 'react';
import { isValidEmail, isValidPostalCode} from '../../../utils/validation';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { TextError } from './TextError';

export function Subscribe() {
  const { t } = useTranslation();

  const [info, setInfo] = useState({
    email: '',
    postalCode: ''
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPostalCode, setValidPostalCode] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsgEmail, setErrorMsgEmail] = useState('');
  const [errorMsgPostalCode, setErrorMsgPostalCode] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    setValidEmail(isValidEmail(value));
    if(validPostalCode === false){
      setErrorMsgEmail("Invalid Email format");
    }
    setInfo({...info, email:value});
  };

  const handlePostalCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target.value).toUpperCase() as string;
    setValidPostalCode(isValidPostalCode(value));
    if(validPostalCode === false){
      setErrorMsgPostalCode("Invalid Postal Code format");
    }
    setInfo({...info, postalCode:value});
  };

  const handleSubmit = () => {
    axios.post(`https://cors-anywhere.herokuapp.com/https://s9g64p6vzb.execute-api.us-east-1.amazonaws.com/default/interview-is-zip-valid`,{
      zip: info.postalCode
    }).then( res =>{
      if(res.status === 200){
        const data = res.data;
        
        if(data.has_error){
          console.log(data.error_message);
        } else{
          setIsSuccess(true); 
        }
      }
    })
  }

  if(isSuccess){
    return <Redirect to={{pathname: '/confirmation', state: info}} />;
  }

  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
      </Helmet>
      <NavBar />
      <Wrapper>
        <h1>{t(translations.subscribe.title)}</h1>
        <Form>
          <FormLabel htmlFor="email">{t(translations.subscribe.form.email)}</FormLabel>
          <Input 
            type="text" 
            name="email" 
            value={info.email}
            placeholder="example@example.com"
            onChange={handleEmailChange}
          /> 
          <TextError>{!validEmail ? errorMsgEmail : null}</TextError>
          
          <FormLabel htmlFor="postalCode">{t(translations.subscribe.form.postalCode)}</FormLabel>
          <Input
            type="text"
            name="postalCode" 
            value={info.postalCode}
            placeholder="A1A 2B2"
            onChange={handlePostalCodeChange}  
          />
          <TextError>{!validPostalCode ? errorMsgPostalCode : null}</TextError>
          
          <Button type="submit" value="Submit" disabled= {!(validEmail && validPostalCode)} onClick={handleSubmit}>{t(translations.subscribe.form.submit)}</Button>
        </Form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Form = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;