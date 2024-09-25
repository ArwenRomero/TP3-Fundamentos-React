import Greeting from "./components/Greeting/Greeting"

export default function App() {
    return (
        <div>
        <Greeting name="Arwen" age={20} />
        <Greeting name="Pablo" age={45} />
        <Greeting name="Dragon" age={104} />
      </div>
    )
}