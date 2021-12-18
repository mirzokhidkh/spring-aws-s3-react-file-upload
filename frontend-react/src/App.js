import React, {useState,useEffect,useCallback} from 'react';
import {useDropzone} from 'react-dropzone'
import axios from "axios"
import "./App.css"

const UserProfiles = () => {

  const [userProfiles,setUserProfiles] = useState([])

  const fetchUserProfile = () => (
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res);
      setUserProfiles(res.data)
    })
  )

  useEffect(()=>{
    fetchUserProfile()
  },[])

  return userProfiles.map((userProfile,key)=>{
    return(
      <div key={key}>
      { userProfile.userProfileId ? (
          <img
          src = {`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
          />
        ):null}

        <br/>
        <br/>

        <h1>{userProfile.username}</h1>
        <p>{userProfile.userProfileId}</p>
        <Dropzone {...userProfile}/>

        <br/>


      </div>
    )
  })
}


function Dropzone({userProfileId}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    console.log(file);

    const formData = new FormData()
    formData.append("file",file)

    axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
    formData,
    {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }).then(()=>{
      console.log("file uploaded successfully");
    }).catch(err=>{
      console.log(err);
    })


  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image file here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

function App() {
  return (
    <div className="App">
    <UserProfiles/>
    </div>
  );
}

export default App;
