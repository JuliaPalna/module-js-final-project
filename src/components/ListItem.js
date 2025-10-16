import moment from 'moment';

import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.id = this.state.id;

    const dateformat = moment(this.state.date).format('DD/MM/YYYY, hh:mm:ss');
    this.$rootElement.innerHTML = `${dateformat} - <b>$${this.state.amount}</b>`;

    const button = document.createElement('button');
    button.className = 'donate-item__delete-button delete-button';
    button.type = 'button';
    button.textContent = 'Удалить';
    this.$button = button;

    this.$rootElement.append(button);
  }
}
