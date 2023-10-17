import './App.css';
import { createContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  Switch,
  FormControlLabel,
} from '@mui/material';

import observable from './components/observer/observable';


import Singleton from './components/singleton/Singleton';
import Proxy from './components/proxy/Proxy';
import Provider from './components/provider/Provider';
import Container from './components/containerPresentational/Container';
import Prototype from './components/prototype/Prototype';
import Observer from './components/observer/Observer';
import ModuleSection from './components/module/Module';


import MixinSection from './components/mixin/MixinSection';
import Mediator from './components/mediator/Mediator';

// Observer
function handleClickToast() {
  observable.notify('User clicked button!');
  console.log('click');
}

function handleToggleToast() {
  observable.notify('User toggled switch!');
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}

observable.subscribe(logger);
observable.subscribe(toastify);

function MUIAccordion({ name, description, children }) {
  return (
    <Accordion>
      <AccordionSummary aria-controls={`${name}-content`} id={`${name}-header`}>
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

function App() {

  return (
    <div className='App'>
      <div className='App-body'>
        <h1>Patterns</h1>
        <p>Modern JavaScript patterns</p>
        <section>
          <MUIAccordion name={'Singleton'}>
            <Singleton />
          </MUIAccordion>
          <MUIAccordion name={'Proxy'}>
            <Proxy />
          </MUIAccordion>
          <MUIAccordion name={'Provider'}>
            <Provider />
          </MUIAccordion>
          <MUIAccordion name={'Prototype'}>
            <Prototype />
          </MUIAccordion>
          <MUIAccordion name={'Container / Presentational'}>
            <Container />
          </MUIAccordion>
          <MUIAccordion name={'Observer'}>
            <Observer
              handleClick={handleClickToast}
              handleToggle={handleToggleToast}
            />
          </MUIAccordion>
          <MUIAccordion name={'Module'}>
            <ModuleSection />
          </MUIAccordion>

          <MUIAccordion name={'Mixin'}>
            <MixinSection />
          </MUIAccordion>

          <MUIAccordion name={'Mediator'} description={''}>
            <Mediator />
          </MUIAccordion>

          
        </section>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
