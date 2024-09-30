import {Component} from 'react';
import io from 'socket.io-client';
class App extends Component {
constructor(){
  super();
  this.state ={
    message:"",
  }
}
componentDidMount(){
//connect server..
 const socket= io.connect('/');
 socket.on('smg', (data)=>{
   this.setState({message:data});
 })
}
  render(){
return (<> 
<h1>Wait Server..</h1>
    <p>{this.state.message}</p>
</>)
  }
}
export default App;
