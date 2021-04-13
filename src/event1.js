import React from 'react';
import axios from 'axios';
 
class Event extends React.Component{
    state={}
    name = this.props.match.params.name
    async componentDidMount() {
        const promise = axios.get('/query', {params: {
          flag: 'one',
          event_name: this.name,
      }});
        const response = await promise;
        this.setState({content: response.data});
        this.setState({url:response.data['url']})
        console.log(response);
      }
render(){
    var url = this.state.url
    console.log('here')
    console.log(url)
return(
<div>
<div className = "about-backgroundImage" >
                <img src={url} />  
            </div>
    <div>{this.name}</div>
<div>This is event1!</div>
</div>
);
}
}
 
export default Event;