import React from 'react';
import axios from 'axios'


class AddPhoto extends React.Component{
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]

        })
        
   }



fileUploadHandler = () => {
const fd = new FormData();
fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
axios.post('', fd, {onUploadProgress: ProgressEvent => {

}})
.then(res => {

})

}

render(){
    return(
        <div className="addPhoto">
            <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
            <button onClick={() => this.fileInput.click()}>Pick file</button>
            <button onClick={this.fileUploadHandler}>Upload</button>
            
        </div>


    )
}

}

export default AddPhoto
