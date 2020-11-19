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

import '@axa-fr/react-toolkit-form-core/dist/form.scss';

const initialState = {
  name: {value: '', message:''},
  agree: { values: [] },
  submit: {disabled: true}
}

function App() {

  const [state, setState] = useState(initialState)
  const options = [
    { label: 'Yes', value: '1' },
  ];

  const onChange= (e) =>{
    switch(e.name){
      case "name":
        let message = ""
        let submit = {disabled:false};
        if(!e.value){
          message= "Name is required"
          submit = {disabled:true};
        } 
        setState({...state, name:{value: e.value, message}, submit})
        break;
      case "agree":
        setState({...state, agree:{values: e.values}})
        break;
      default:
        break;
    }
  }

  return (<>
    <Header />
    <Title />
    <div className="container">
    <div className="row">
      <div className="col col-sm-12">
        <form className="af-form">
          <h1 className="af-title--content">My Form</h1>
            <TextInput
              label='Name'
              id='name'
              name='name'
              onChange={onChange}
              value={state.name.value}
              message={state.name.message}
              helpMessage='Enter a name'
             />
             <CheckboxInput
              label="Are you agree"
              id='agree'
              name="agree"
              options={options}
              values={state.agree.values}
              onChange={onChange}
              mode="classic"
            />
            <Button className="offset-md-2 btn af-btn" id="id" onClick={()=>{}} disabled={state.submit.disabled} classModifier={state.submit.disabled ? "disabled": ""}>
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
