import logo from './slash-logo.svg';

import '@axa-fr/react-toolkit-layout-footer/dist/footer.scss';

function Footer() {
  return (
    <footer class="af-footer">
    <div class="container"><a class="af-logo" href="https://www.axa.fr/" title="Site Axa France" target="blank"><img class="af-logo__brand" src={logo} alt="Logo Slash Design System" /></a>
        <div class="af-footer-content">@ 2020 AXA Tous droits réservés</div>
    </div>
</footer>
  );
}

export default Footer;
