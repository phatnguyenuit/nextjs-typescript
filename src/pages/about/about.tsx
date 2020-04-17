import { NextPage } from 'next';
import Hello from 'components/Hello';

const About: NextPage = () => {
  return (
    <div>
      <p>About page</p>
      <Hello>World!</Hello>
    </div>
  );
};
export default About;
