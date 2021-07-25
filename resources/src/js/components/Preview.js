export class Preview {
  rootElement;
  closeButton;

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.closeButton = this.rootElement.querySelector('#previewCloseButton');

    this.setEventHandlers();
  }

  setEventHandlers() {
    this.closeButton.addEventListener('click', this.close.bind(this));
  }

  close() {
    this.rootElement.style.display = 'none';
  }
}