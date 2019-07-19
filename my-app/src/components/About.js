import React from 'react';
import RainBow from './HigherOderComponents/Rainbow';
const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, vel!
        Eius quasi sunt unde? Veniam, laudantium aliquid optio eveniet, qui,
        cumque soluta rem eum tempora assumenda sint est quas placeat?
      </p>
    </div>
  );
};

export default RainBow(About);
