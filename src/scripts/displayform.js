

class FormDataComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
      const template = `
        <style>
          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 20px;
            text-align: center;
          }
          .card img {
            max-width: 100%;
            height: auto;
          }

        </style>
        <div class="card">
          <img src="${formData.image}" alt="">
          <h1>${formData.title}</h1>
          <p>${formData.date}</p>
          <p>${formData.message}</p>
          <div class="button-arrow">
            <a href="../pages/createpage.html"><button> Make An Edit </button></a>
          </div>
        </div>
      `;
      this.shadowRoot.innerHTML = template;
    }
  }
}

customElements.define('form-component', FormDataComponent);
