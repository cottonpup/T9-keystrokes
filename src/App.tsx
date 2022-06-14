import { useState } from 'react';
import { Input } from './components/Input';
import { Keyboard } from './components/Keyboard';
import { Layout } from './components/Layout';
import { Phone } from './components/Phone';
import { Prediction } from './components/Prediction';

function App() {
  const [enteredDigits, setEnteredDigits] = useState('');
  const [parsedLetters, setParsedLetters] = useState('');

  return (
    <div className="App">
      <Layout>
        <Phone>
          <Input parsedLetters={parsedLetters} />
          <Prediction
            enteredDigits={enteredDigits}
            setParsedLetters={setParsedLetters}
            parsedLetters={parsedLetters}
            setEnteredDigits={setEnteredDigits}
          />
          <Keyboard setEnteredDigits={setEnteredDigits} enteredDigits={enteredDigits} />
        </Phone>
      </Layout>
    </div>
  );
}

export default App;
