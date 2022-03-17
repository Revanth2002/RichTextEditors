
import React , {Component} from 'react';

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
 
        }
    }

    makeTabAsSpaces() {
        const txt = document.getElementById('txtarea');
        txt.addEventListener('keydown',function(e){
            if(e.key=='Tab'){
                document.execCommand("insertText", false, '\t');
                e.preventDefault();
            }
        })
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
        this.makeTabAsSpaces();
    }    

    onInput = function(e){
        // console.log(e.currentTarget.textContent);
        // console.log(e.currentTarget)
    }
    
    getSelection = function(e){
        //console.log(e.currentTarget.textContent);
        console.log(getSelectionText());
    }

    render() {
        return (
            <div class="page">
                <a onClick={formatDoc('bold')}>bold</a>
                <div 
                class="customtextarea"
                contentEditable='true' 
                id='txtarea'  
                onChange={this.onChange.bind(this)} 
                autoFocus 
                onInput={this.onInput.bind(this)}
                onMouseUpCapture={this.getSelection.bind(this)}
                onKeyDownCapture={this.getSelection.bind(this)}
                ></div>
{/*                 
                <textarea name="text_name"  id='txtarea' onChange={this.onChange.bind(this)} autofocus>Some text...</textarea> */}
          </div>
        
        )
    }
}
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control"){
        text = document.selection.createRange().text;
    }else{
            alert('no')
    }
    return text;
}

function formatDoc(sCmd, sValue) {
    var oDoc, sDefTxt;
    console.log(sCmd);
    document.execCommand(sCmd, false, sValue); 
  }

  
export default EditingArea
