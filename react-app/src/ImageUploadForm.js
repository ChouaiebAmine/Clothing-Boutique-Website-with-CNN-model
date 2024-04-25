import React from 'react';

const ImageUploadForm = ({ FileChange }) => {
    const handleFileChange =(e) => {
        const file = e.target.files[0];
        onFileChange(file);
    };


    return (
        <form>
            <input type ="file" onChange={handleFileChange}/>
        </form>
    );
};

export default ImageUploadForm;