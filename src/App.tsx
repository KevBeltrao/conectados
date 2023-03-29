import { useState, type FC } from 'react';
import Button from './components/Button';
import GlobalStyle from './styles/GlobalStyle';

const App: FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Button
        variation='bordered'
        onClick={() => { setCount1(count1 + 1); }}
      >{count1}</Button>

      <Button
        variation='primary'
        onClick={() => { setCount2(count2 + 1); }}
      >{count2}</Button>
      <GlobalStyle />
    </div>
  );
};

export default App;
