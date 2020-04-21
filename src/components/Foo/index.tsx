import React, { memo } from 'react';
import { useFooState, useFooActions } from './utils';

export const FooComponent: React.FC = () => {
  const { foo } = useFooState();
  const { handleFoo } = useFooActions();
  return (
    <div>
      <p>Foo: {foo}</p>
      <button onClick={handleFoo}>Foo</button>
    </div>
  );
};

const Foo = memo(FooComponent);
Foo.displayName = 'Foo';

export default Foo;
