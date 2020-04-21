import { NextPage, NextPageContext } from 'next';
import { WrappedAppProps } from 'next-redux-wrapper'
import Hello from 'components/Hello';
import { actions } from 'states/foo';

const About: NextPage = () => {
  return (
    <div>
      It's about you!
      <Hello>World!</Hello>
    </div>
  );
};

About.getInitialProps = async (ctx: NextPageContext) => {
  console.log('context', ctx);
  const { store, isServer, } = ctx;
  store.dispatch(
    actions.foo("Server side value")
  )
}

About.displayName = 'About';
export default About;
