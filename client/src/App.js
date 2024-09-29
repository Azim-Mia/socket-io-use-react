import {Component} from 'react';
import io from 'socket.io-client';
class App extends Component {
componentDidMount(){
//connect server..
  io.connect('/');
}
  render(){
  alert("hi2");
return (<> 
{alert("hi3")}
    <p>hellow bangladesh</p>
</>)
  }
}
export default App;
