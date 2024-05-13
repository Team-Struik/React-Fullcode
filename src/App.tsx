import Home from "./components/pages/home";
import useReadCSV from "./functions/ReadCSV";

function App() {
  console.log(useReadCSV());

  return (
    <div className="grid-container grid h-screen grid-cols-2">
      <div className="px-8 py-4 border-r-2 h-screen">
        <div className="pt-4 pb-8">
          <h1 className="text-4xl font-bold">
            <span className="text-primary">Blis</span>
            <span className="text-outline">Digital</span>
          </h1>
        </div>
        <Home />
        {/* <MaterialSelect /> */}
      </div>
      <div>test</div>
    </div>
  );
}

export default App;
