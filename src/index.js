import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { GraphQLClient, ClientContext } from 'graphql-hooks'


const CSM_API_TOKEN=process.env.REACT_CMS_API_TOKEN;
console.log(CSM_API_TOKEN);
const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer 57da80fd76f68a4b69a3b91c8c086b",
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
