import React from 'react';
import OrderCallbackForm from '../OrderCallbackForm';
import {
  Tooltip,
} from 'react-tippy';

export default () => (
  <Tooltip
    html={<OrderCallbackForm />}
    position="bottom"
    trigger="click"
    interactive={true}
  >
    <button className="btn btn--outline-brand">Заказать обратный звонок</button>
  </Tooltip>
);
