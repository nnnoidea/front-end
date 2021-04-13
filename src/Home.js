import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Home extends React.Component{
    state = [];
    constructor(props) {
        super(props);
        this.state = [];
      }

  async componentDidMount() {
    const promise = axios.get('/query', {params: {
      flag: 'all',
      event_name: '',
  }});
    const response = await promise;
    
    this.setState(response.data);
  }

render(){
  var data=[]
  for(var key in this.state){
    data.push(this.state[key])
  }
  console.log('here')
   console.log(data)
return(
<div>
<div>This is Home!</div>

{data.map(item=>{
   
   return (<Link to={"/Event/"+item+"/"} style={{color:'black'}}>
   <div>{item}</div>
   </Link>)
})}

</div>
);
}
}
 
export default Home;