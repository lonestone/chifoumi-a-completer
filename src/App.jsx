import '@picocss/pico/css/pico.min.css';
import ChifoumiActions from './components/ChifoumiActions.jsx'

function App() {
  return (
    <>
      <main className="container">
        <h1>Chifoumi</h1>

        <div className="grid">
          <ChifoumiActions />
        </div>
      </main>
    </>
  )
}

export default App