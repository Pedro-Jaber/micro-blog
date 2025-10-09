import { useState } from "react";
import BlogList from "./BlogList";

import useFetch from "./useFetch";

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

  /*
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
  */

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2 style={{ marginBottom: "3rem" }}>Homepage</h2>

      {false && (
        <div>
          <button onClick={handleClick}>Click me</button>
          <button onClick={(e) => handleClickAgain(e, "John")}>Click me</button>
        </div>
      )}

      {false && (
        <div>
          <p>
            My name is {name} and I'm {age}
          </p>
          <button onClick={changeName}>Click me</button>
        </div>
      )}

      {false && (
        <div>
          <p>
            My name is {name} and I'm {age}
          </p>
          <button onClick={() => setName("luigi")}>Click me</button>
        </div>
      )}

      {true && (
        <div>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
          {/* <BlogList
          blogs={blogs.filter((b) => b.author === "mario")}
          title="Mario's Blogs!"
        /> */}
        </div>
      )}
    </div>
  );
};

export default Home;
