import Navbar from './Navbar';
import Home from './Home';
import { Browser Router as Router, Route, Switch } from 'react-router-dom';
function App() {
return (
<Router>
<div className="App">
<Navbar />
<div className="content">
<Switch>
<Route path="/">
<Home />
</Route>
</Switch>
</div>
</div>
I
</Router>
);
}
export default App;
