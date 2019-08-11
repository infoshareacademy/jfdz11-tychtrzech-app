// import React from 'react';
// // import axios from 'axios'
// import FileUploader from "react-firebase-file-uploader";
// import firebase from "firebase"
// class AddPhoto extends React.Component{
//     state = {
//         selectedFile: null
//     }
//     fileSelectedHandler = event => {
//         this.setState({
//             selectedFile: event.target.files[0]

//         })
        
//    }



// // fileUploadHandler = () => {


//     handleUploadSuccess = filename => {
//         this.setState({ avatar: filename, progress: 100, isUploading: false });
//         firebase
//           .storage()
//           .ref("images")
//           .child(filename)
//           .getDownloadURL()
//           .then(url => this.setState({ avatarURL: url }));
//       };
     






//     // const fd = new FormData();
// // fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
// // axios.post('', fd, {onUploadProgress: ProgressEvent => {

// // }})
// // .then(res => {

// // })

// // }

// render(){
//     return(
//         <div className="addPhoto">
//             <input style={{display: 'none'}} type="file" onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput}/>
//             <button onClick={() => this.fileInput.click()}>Pick file</button>
//             <button onClick={this.handleUploadSuccess}>Upload</button>
            
//         </div>


//     )
// }

// }

// export default AddPhoto



import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
class AddPhoto extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
 
  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
 
  render() {
    return (
      <div>
        <form>
        <CustomUploadButton
    accept="image/*"
    storageRef={firebase.storage().ref('images')}
    onUploadStart={this.handleUploadStart}
    onUploadError={this.handleUploadError}
    onUploadSuccess={this.handleUploadSuccess}
    onProgress={this.handleProgress}
    style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4}}
  >
    Select your awesome avatar
  </CustomUploadButton>

          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}
 
export default AddPhoto;