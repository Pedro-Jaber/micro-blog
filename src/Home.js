import { useState } from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("event:", e);
    console.log("clicked");
  };

  const handleClickAgain = (e, name) => {
    console.log("event:", e);
    console.log("Hello, " + name);
  };

  // Not reactive
  // let name = "mario";

  // Reactive
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(20);

  const changeName = () => {
    // name = "luigi";
    setName("luigi");
    setAge(30);
    console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      <div style={{ display: "none" }}>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain(e, "John")}>Click me</button>
      </div>

      <div style={{ display: "inherit" }}>
        <p>
          My name is {name} and I'm {age}
        </p>
        <button onClick={changeName}>Click me</button>
      </div>
    </div>
  );
};

export default Home;
