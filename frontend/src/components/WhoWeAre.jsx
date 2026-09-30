import React from 'react';
import { data } from '../restApi.json';

const WhoWeAre = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div className="container">
        {/* Left Stats Banner */}
        <div className="text_banner">
          {data[0].who_we_are.slice(0, 2).map((element) => (
            <div className="card" key={element.id}>
              <h1 className="heading" style={{ fontWeight: '300' }}>
                {element.number}
              </h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>

        {/* Center Image Banner */}
        <div className="image_banner">
          <img src="/gradient_bg.svg" alt="Gradient background" className="gradient_bg" />
          <img src="/whoweare.png" alt="Zeesu Chefs in Kitchen" />
        </div>

        {/* Right Stats Banner */}
        <div className="text_banner">
          {data[0].who_we_are.slice(2, 4).map((element) => (
            <div className="card" key={element.id}>
              <h1 className="heading" style={{ fontWeight: '300' }}>
                {element.number}
              </h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
