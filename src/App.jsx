import Count from "./Count";
import { Course } from "./Course";
import Name from "./Name";

const App = () => {
  // js
  let test = "hello world";

  let arr = [
    {
      course: "full Stack",
      color: "red",
      img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
      bg: "black",
    },
    {
      course: "frontend",
      color: "green",
      img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
    {
      course: "backend",
      color: "yellow",
      img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
    {
      course: "spring boot",
      color: "green",
      img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    },
  ];
  let data1 = { initial: 10, add: 5, remove: 2 };
  return (
    // html + js
    <div>
      <h1>Counter</h1>
      <Count {...data1} />
      <Count {...{ initial: 50, add: 10, remove: 5 }} />
      {/* <Count />
      <Count />
      <Count /> */}

      {/* <div id="parent-box">
        {arr.map((ele, i) => {
          return <Course {...ele} key={i} />;
        })}
      </div> */}
    </div>
  );
};

export default App;
