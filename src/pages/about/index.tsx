import { NextPage } from 'next';
import Hello from 'components/Hello';

const About: NextPage = () => {
  return (
    <div>
      It's about you!
      <Hello>World!</Hello>
    </div>
  );
};

About.displayName = 'About';
export default About;
