import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/api/landing-page")
      .then((res) => res.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <Header />
      {content && (
        <>
          <Hero
            title={content.title}
            subtitle={content.subtitle}
            buttons={content.buttons}
          />
        </>
      )}
    </div>
  );
};

export default App;
