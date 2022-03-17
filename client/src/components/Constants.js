
import React from 'react'

export const MakeTabAsSpaces =() => {
    const txt = document.getElementById('txtarea');
    txt.addEventListener('keydown',function(e){
        if(e.key=='Tab'){
            document.execCommand("insertText", false, '\t');
            e.preventDefault();
        }
    })
};

export const GetSelectionText = () =>{
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

export const FormatDoc = (sCmd, sValue) =>{
    var oDoc, sDefTxt;
    console.log(sCmd);
    console.log(sValue);
    document.execCommand(sCmd, false, sValue); 
  }

