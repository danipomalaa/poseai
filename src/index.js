import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Provider from "./Context"
import MultiProvider from "./Config/MultiProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MultiProvider
    providers={[
      <Provider.SampleProvider key={0} />,
      <Provider.PoseProvider key={1} />,
      <Provider.MemberProvider key={1} />,
    ]}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MultiProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
