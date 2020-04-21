import { NextPage, NextPageContext } from 'next';
import { actions } from 'states/foo';
import Foo from 'components/Foo';

const FooPage: NextPage = () => (
  <div>
    <p>FooPage</p>
    <Foo />
  </div>
);

FooPage.displayName = 'Foo';
export default FooPage;

FooPage.getInitialProps = async (ctx: NextPageContext) => {
  const { store } = ctx;
  store.dispatch(actions.foo('Server side value'));
};
