import {Component} from 'react';
import io from 'socket.io-client';
import {RouterProvider,} from 'react-router-dom';
import {router} from '../src/routingPage/routingPage';
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
<RouterProvider router={router} />
<h1>Wait Server..</h1>
    <p>{this.state.message}</p>
</>)
  }
}
export default App;
