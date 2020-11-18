import logo from './slash-logo.svg';

import '@axa-fr/react-toolkit-layout-header/dist/Header/header.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Infos/infos.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Name/name.scss';
import '@axa-fr/react-toolkit-layout-header/dist/User/user.scss';
import '@axa-fr/react-toolkit-layout-header/dist/Logo/logo.scss';

function Header() {
  return (
    <div className="af-header">
    <div className="container af-header__wrapper">
        <header className="af-header__content" role="banner">
            <div className="af-header__name"><a className="af-logo" href="/"><img className="af-logo__brand" src={logo} alt="Logo Slash Design System" /></a>
                <h2 className="af-header__title">Nom de l&apos;application<small className="af-header__subtitle">Baseline</small></h2>
            </div>
            <div className="af-contrat">
                <svg className="glyphicon glyphicon-info-sign" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <path d="M50.382 0.736c-27.365 0-49.549 22.184-49.549 49.55 0 27.364 22.184 49.547 49.549 49.547 27.365 0 49.548-22.183 49.548-49.547 0-27.366-22.183-49.55-49.548-49.55zM58.151 68.517c-3.74 5.613-7.544 9.941-13.944 9.941-4.369-0.712-6.163-3.843-5.214-7.031l8.233-27.269c0.198-0.668-0.135-1.381-0.744-1.594-0.609-0.214-1.799 0.576-2.829 1.702l-4.975 5.988c-0.136-1.003-0.014-2.667-0.014-3.337 3.74-5.612 9.88-10.044 14.046-10.044 3.962 0.407 5.833 3.571 5.144 7.050l-8.29 27.402c-0.111 0.62 0.216 1.246 0.779 1.444 0.609 0.213 1.89-0.576 2.92-1.703l4.975-5.988c0.136 1.002-0.087 2.769-0.087 3.439zM57.043 32.901c-3.149 0-5.701-2.291-5.701-5.671 0-3.378 2.552-5.669 5.701-5.669 3.148 0 5.701 2.291 5.701 5.669-0.001 3.381-2.553 5.671-5.701 5.671z"></path>
                </svg>
                <dl className="af-contrat__list">
                    <dt className="af-contrat__word">Client :</dt>
                    <dd className="af-contrat__def">0123456789 - NOM</dd>
                    <dt className="af-contrat__word">Portefeuille :</dt>
                    <dd className="af-contrat__def">000123456789</dd>
                    <dt className="af-contrat__word">Status :</dt>
                    <dd className="af-contrat__def">Affaire nouvelle</dd>
                </dl>
            </div>
            <div className="af-info-user"><a className="af-info-user__link" href="/profile" title="Voir mon profil"><span className="af-info-user__name">Pierre Martin</span><span className="af-info-user__profile">[Profile]</span></a></div>
        </header>
    </div>
</div>
  );
}

export default Header;
