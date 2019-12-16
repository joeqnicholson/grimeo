import React from 'react'

class VideoUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            videoFile: null,
            title: "",
            description: "",
            uploader_id: null,
            video_url: null,
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(){

    }
    handleFile(){
        this.setState({videoFile: e.currentTarget.files[0]})
    }
    handleSubmit(){
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        formData.append('video[video]', this.state.videoFile)
        $.ajax({
            url: "/api/posts",
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }
    render(){
        return(
            <div class='upload-master-wrap'>
                <div class='upload-minibox'>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div class='upload-container'>
                            <input type='file' title=' ' class='upload-drag'
                                onChange={this.handleFile.bind(this)} />
                            <img src="upload.png" class='upload-image' alt=""/>
                            <div class='big-drag-text-wrap'>
                                <div class='big-drag-text'>Drag and drop anywhere to upload</div>
                            </div>
                            <div class='text-prompt-upload'>
                                 
                            <i class="fas fa-cloud-upload-alt"> </i>
                                 {` `}Or choose file</div>
                        </div>
                        <div class='input-wrapping'>
                            <input class='upload-title'     
                                type="text"
                                placeholder='Title'
                                value={this.state.title}/>
                            <input class='upload-description'
                                type="text"
                                placeholder='Description'
                                value={this.state.description}/>
                            <button class='submit-upload'>Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default VideoUpload;