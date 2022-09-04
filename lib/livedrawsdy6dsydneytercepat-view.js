'use babel';

export default class Livedrawsdy6dsydneytercepatView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('livedrawsdy6dsydneytercepat');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The Livedrawsdy6dsydneytercepat package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
