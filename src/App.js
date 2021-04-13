import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Event from './event1';
import Event2 from './event2';
import Event3 from './event3';
 
class App extends React.Component {
render(){
return(
<Router >
                <div>
<Route exact path="/" component={Home} />
<Route path="/Event/:name" component={Event} />
<Route path="/Event2" component={Event2} />
<Route path="/Event3" component={Event3} />
</div>
</Router>
)
}
}
export default App;