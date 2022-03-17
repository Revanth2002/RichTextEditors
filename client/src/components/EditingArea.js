import React , {Component} from 'react';
import {MakeTabAsSpaces,FormatDoc} from './Constants';
import {useState,useEffect} from 'react';
import {io} from 'socket.io-client'

// export default function EditingArea() {
//   return (
//     <div style={{color: 'red'}}>HELO</div>
//   )
// }

class EditingArea extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            text_name : '',
            socket : null,
            default : '',
    
        }
    }

    async socketConnect(){
        var connectInterval;

        this.socket = io("ws://localhost:3001");
        this.socket.on('connect',()=>{
            console.log("connected")
        })
        //socket.emit("message", 5, "6", { 7: Uint8Array.from([8]) });
        // receive a message from the server

        this.socket.on("server", (evt) => {
            console.log(evt);
            const message = JSON.parse(evt);
                console.log(message);
                if(message.msg === "saved" || message.msg === 'received'){
                    this.setState({
                        default : message.raw, // this.state.text_name
                    })
                }
        });
        

        this.socket.disconnect = (e) =>{
            connectInterval = setTimeout(this.check, 3000); 
        }

        this.ws.onerror = (err) => {
            this.socket.disconnect();
        };
        
    }
    

    check = async () => {
        const { ws } = this.state;
        if (!ws || ws.readyState == WebSocket.CLOSED) this.socketConnect(); //check if websocket instance is closed, if so call `connect` function.
      };

    componentDidUpdate(){ 
    }

    onChange = function(e){
        // console.log(e.target.value);
        // console.log(this.state.text_name);
        // console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    componentDidMount(){
        MakeTabAsSpaces();
        this.socketConnect();
    }    

    onInput = function(e){
        if(this.socket.CLOSED){
        }else{
            const msg = {"msg" : "Sending from client","raw" : e.currentTarget.innerHTML}
            this.socket.emit("message", JSON.stringify(msg));
        }


        console.log(e.currentTarget);
        console.log(e.currentTarget.innerHTML);

    }
    

    changeToBold = function(e){
        FormatDoc('bold');
    }

    render() {
        return (
            <div className="page">
                <a onClick={this.changeToBold.bind(this)} href="#">Bold</a>
                <div 
                 dangerouslySetInnerHTML={{__html: this.state.default}}
                className="customtextarea"
                contentEditable='true' 
                id='txtarea'  
                onChange={this.onChange.bind(this)} 
                autoFocus   
                onInput={this.onInput.bind(this)}
                // onMouseUpCapture={this.getSelection.bind(this)}
                // onKeyDownCapture={this.getSelection.bind(this)}
                ></div>
             {/*<textarea name="text_name"  id='txtarea' onChange={this.onChange.bind(this)} autofocus>Some text...</textarea> */}
          </div>
        
        )
    }
}

  
export default EditingArea

/*
<img class="intLink" title="Bold" onClick={this.changeToBold.bind(this)} src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" />
*/