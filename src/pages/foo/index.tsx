import { NextPage, NextPageContext } from 'next';

const FooPage: NextPage = () => {
  return (
    <div>
      <p>FooPage</p>
    </div>
  );
};

FooPage.displayName = 'Foo';
export default FooPage;
