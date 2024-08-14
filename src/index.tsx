import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');

const elem = <div></div> as unknown as HTMLElement;

const root = createRoot(container ? container : elem);

root.render(
    <App/>
)
