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
              width: 400px;
              height: 400px;
              background-color: #fff;
              border: 1px solid #ddd;
              border-radius: 4px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              margin: 10px;
            
            }
            
            .card img {
              width: 100%;
              height: 200px;
              display: block;
              margin-bottom: 10px;
            }
            
            .card h1 {
              font-size: 1.2em;
              margin: 5px 5px;
            }
            
            .card p {
              font-size: 0.9em;
              line-height: 1.5;
              margin: 15px;
            }
            
            .card button {
              background-color: red;
              color: #fff;
              border: none;
              padding: 10px 20px;
              border-radius: 3px;
              cursor: pointer;
            }
            .button-arrow{
                display:flex;
                justify-content: space-between;
                justify-items: center;
                margin: 15px;
                arrow-right{
                    display:flex;
                    justify-content: center;
                }
            }
        </style>
        <div class="card">
          <img src="${formData.image}" alt="">
          <h1>${formData.title}</h1>
          <p>${formData.date}</p>
          <p>${formData.message}</p>
          <div class="button-arrow">
            <a href=""><button>Delete</button></a>
            <a class="arrow-right" href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg></a>
          </div>
        </div>
      `;
      this.shadowRoot.innerHTML = template;
    }
  }
}

customElements.define('form-data-component', FormDataComponent);

