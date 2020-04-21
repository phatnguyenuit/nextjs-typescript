import { NextPage } from 'next';
import Counter from 'components/Counter';

const CounterPage: NextPage = () => {
  return (
    <div>
      <p>CounterPage</p>
      <Counter />
    </div>
  );
};

CounterPage.displayName = 'Counter';
export default CounterPage;
