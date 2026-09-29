import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center py-5">
          <h1 className="fw-bold">
            BagNest
          </h1>

          <p className="text-muted">
            Travel light. Store smart.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;