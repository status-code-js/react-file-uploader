import React from 'react'
import axios from 'axios'
import './FileUpload.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0]
        if(!file) return;
        file.isUploading = true
        setFiles([...files, file])

        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )

    axios.post('http://localhost:8080/upload', formData)
        .then((res) => {
            file.isUploading = false 
            setFiles([...files, file])
        })
        .catch((err) => {
            console.error(err)
            removeFile(file.name)
        })  
    }
    return (
        <>
        <div className="file-card">
        <div className="file-inputs">
            <input type="file" onChange={uploadHandler} />
            <button>
                <i>
                   <FontAwesomeIcon icon={faPlus} />
                </i>
                Upload
            </button>
        </div>
        </div>
        </>
    )
}

export default FileUpload