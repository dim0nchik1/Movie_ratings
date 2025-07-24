
import Stars from './Stars';
import './App.css'

function App() {
    return (
        <div>
            <Stars count={4} />
            <Stars count={2} />
            <Stars count={5} />
            <Stars count={5.5} />
            <Stars count={"iii"} />
        </div>
    );
}

export default App;