import '@axa-fr/react-toolkit-layout-footer/dist/footer.scss';
import { Footer } from '@axa-fr/react-toolkit-layout-footer';
import logo from './slash-logo.svg';

function FooterComponent() {
  return (
    <Footer
    icon={logo}
    copyright={'copyright'}
  />
  );
}

export default FooterComponent;
