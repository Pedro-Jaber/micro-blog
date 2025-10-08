import { useState, useEffect } from "react";
import BlogList from "./BlogList";

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

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((b) => b.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect");
    console.log("blogs:", blogs);

    //! Cria um loop infinito
    // const newBlogs = blogs;
    // newBlogs.pop();
    // setBlogs(newBlogs);
  }, [name, blogs]);
  // ^^^^
  // Dependenci array (only run if these values change and in first render)

  useEffect(() => {}, []);

  return (
    <div className="home">
      <h2 style={{ marginBottom: "3rem" }}>Homepage</h2>

      <div style={{ display: "none" }}>
        <button onClick={handleClick}>Click me</button>
        <button onClick={(e) => handleClickAgain(e, "John")}>Click me</button>
      </div>

      <div style={{ display: "none" }}>
        <p>
          My name is {name} and I'm {age}
        </p>
        <button onClick={changeName}>Click me</button>
      </div>

      <div style={{ display: "inherit" }}>
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
        {/* <BlogList
          blogs={blogs.filter((b) => b.author === "mario")}
          title="Mario's Blogs!"
          handleDelete={handleDelete}
        /> */}
      </div>

      <div style={{ display: "inherit" }}>
        <p>
          My name is {name} and I'm {age}
        </p>
        <button onClick={() => setName("luigi")}>Click me</button>
      </div>
    </div>
  );
};

export default Home;
