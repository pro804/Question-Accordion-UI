import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return <h2>Question Accordion </h2>;
};

export default App;
