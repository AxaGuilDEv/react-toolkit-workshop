import { Name, Header, Infos, User } from '@axa-fr/react-toolkit-layout-header';
import logo from './slash-logo.svg';

import '@axa-fr/react-toolkit-layout-header/dist/Header/header.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Infos/infos.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Name/name.scss';
import '@axa-fr/react-toolkit-layout-header/dist/User/user.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Logo/logo.scss';

const infos = [
    {
      word: 'Client :',
      definition: '0123456789 - NOM',
    },
    {
      word: 'Portefeuille :',
      definition: '000123456789',
    },
    {
      word: 'Status :',
      definition: 'Affaire nouvelle',
    },
  ];

function HeaderComponent() {
  return (
    <Header>
    <Name
      title="Nom de l'application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={() => {}}
    />
    <User name="Pierre Martin" href="/profile" profile="profile" onClick={()=>{}} />
    <Infos infos={infos} />
  </Header>
  );
}

export default HeaderComponent;
