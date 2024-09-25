import ProfileCard from "./ProfileCard"

const App = () => {
    return (
    <div>
        <ProfileCard name="Arwen" age={20}/>
        <ProfileCard name="Pablo" age={45}/>
        <ProfileCard name="Dragon" age={128}/>
    </div>
    )
}

export default App;