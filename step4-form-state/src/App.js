import {useState} from "react";
import Header from './Header'
import Title from './Title';
import Footer from './Footer';

import { TextInput } from '@axa-fr/react-toolkit-form-input-text';
import '@axa-fr/react-toolkit-form-input-text/dist/inputtext.scss';

import { CheckboxInput } from '@axa-fr/react-toolkit-form-input-checkbox';
import '@axa-fr/react-toolkit-form-input-checkbox/dist/checkbox.scss';

import Button from '@axa-fr/react-toolkit-button';
import '@axa-fr/react-toolkit-button/dist/button.scss';

const initialState = {
  name: {value: ''},
  agree: { values: [] }
}

function App() {

  const [state, setState] = useState(initialState)
  const options = [
    { label: 'Yes', value: '1', disabled: false, id: 'uniqueId1' },
  ];

  const onChange= (e) =>{
    switch(e.name){
      case "name":
        setState({...state, name:{value: e.value}})
      case "agree":
        setState({...state, agree:{values: e.values}})
      default:
        break;
    }
  }

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
              onChange={onChange}
              value={state.name.value}
              helpMessage='Enter a name'
             />
             <CheckboxInput
              label="Are you agree"
              name="agree"
              options={options}
              values={state.agree.values}
              onChange={onChange}
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
