import Home from "./pages/Home";

function App() {

  useEffect(() => {
    fetchData().then(function (result) {
      
     });

  }, []);
  return <div className="App"><Home/></div>;
}

export default App;
