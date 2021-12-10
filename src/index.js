import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderCoupon = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountCoupon = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
