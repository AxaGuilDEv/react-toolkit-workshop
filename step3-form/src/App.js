
import Header from './Header'
import Title from './Title';
import Footer from './Footer';

import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/inputtext.scss';

import { CheckboxInput } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/checkbox.scss';

import Button from '@axa-fr/react-toolkit-button';
import '@axa-fr/react-toolkit-button/dist/button.scss';

function App() {
  const options = [
    { label: 'Are you agree', value: '1', disabled: false, id: 'uniqueId1' },
  ];
  return (<>
    <Header />
    <Title />
    <div className="af-container">
    <div className="row">
      <div className="col col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <form className="af-form">
          <h1 className="af-title--content">My Form</h1>
            <TextInput
              label='Name'
              name='name'
              onChange={()=>{}}
              value=""
              helpMessage='Enter a name'
             />
             <CheckboxInput
              label="Place type"
              name="Place type"
              options={options}
              values={[]}
              onChange={()=>{}}
            />
            <Button id="id" onClick={()=>{}}>
              <span className="af-btn__text">Send</span>
            </Button>
        </form>
        </div>
      </div>
    </div>
    <Footer />
</>
  );
}

export default App;
