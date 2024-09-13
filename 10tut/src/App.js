import Square from './Square';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState(''); 
  const [hexValue, setHexValue] = useState('');
  const[isDarkText, setIsDarkTest] = useState(true)

  return (
    <div className="App">
      <Square 
       colorValue={colorValue} 
       hexValue={hexValue}
       isDarkText={isDarkText}
      /> 
      <Input 
        colorValue={colorValue} 
        setColorValue={setColorValue} 
        isDarkText={isDarkText}
        setIsDarkTest = {setIsDarkTest}
      /> 
    </div>
  );
}

export default App;
