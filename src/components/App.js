import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = { 
      total: 0,
      donates: [],
    };

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const heading = document.createElement('h1');
    heading.className = 'total-amount';
    heading.textContent = `Итого: $`;

    const total = document.createElement('span');
    total.textContent = this.state.total;
    this.$total = total;

    heading.append(total);
    this.$rootElement.appendChild(heading);
    
    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    });

    this.$rootElement.appendChild(donateForm.$rootElement);
    
    const donateList = new List({
      onDelete: this.onItemDelete.bind(this),
    });

    this.donateList = donateList;
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    this.state.total += amount;
    this.$total.textContent = this.state.total;

    const newDonate = new ListItem({ amount });
    this.state.donates.push(newDonate);
    this.donateList.addItem(newDonate);
  }

  onItemDelete(props) {
    const { id } = props;

    const indexItem = this.state.donates.findIndex((item) => {
      return String(item.state.id) === id;
    })

    this.state.total -= this.state.donates[indexItem].state.amount;
    this.$total.textContent = this.state.total;

    this.state.donates.splice(indexItem, 1);
  }
}
