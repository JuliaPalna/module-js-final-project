import { Component } from '../core/Component';

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const title = document.createElement('h2');
    title.className = 'donates-container__title';
    title.textContent = 'Список донатов';

    const donates = document.createElement('div');
    donates.className = 'donates-container__donates';
    this.$donates = donates;

    this.$rootElement.append(title, donates);
    this.$rootElement.addEventListener('click', this.handleDelete.bind(this));
  }

  addItem(item) {
    this.$donates.appendChild(item.$rootElement);
  }

  handleDelete(event) {
    const donateDeleted = event.target.closest(".donate-item");
    const id = donateDeleted?.id;

    if (id) {
      this.props.onDelete({ id });
      this.$donates.removeChild(donateDeleted);
    }
  }
}