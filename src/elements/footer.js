export default customElements.define('footer-element', class FooterElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }

  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: row;
      }
    </style>

    <flex-column>

      <p class="footer-links">
        <a class="link-1" href="../../index.html">Home</a>
        <a href="https:/artonline.site">About</a>
        <a href="#">Contact</a>
      </p>
      <p class="thanks">special thanks to <br> BHero#9746 <br> Iondependent#5156</p>
      <p>Phorgegiving &copy; 2022. All rights reserved</p>
      <p class="up">beta 1.2.2 this website may have some known bugs.</p>
    </flex-column>

    <flex-one></flex-one>

    <flex-column class="footer-right">

      <a href="#"><i class="fa "><img src="img/telegram.png" class="telegram"></i></a>
      <a href="https://discord.gg/ntAXPmEW2S"><i class="fa "></i>
      <img src="img/discord.png" class="telegram"></a>
    </flex-column>


    `
  }
})
