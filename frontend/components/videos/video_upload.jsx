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

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value });
        };
    }

    handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

        this.setState({videoFile: file, videoUrl: fileReader.result});
    };
    if (file) {
        fileReader.readAsDataURL(file);
    }
    }
    handleSubmit(){
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        debugger
        formData.append('video[description]', this.state.title)
        if(this.state.videoFile){
            formData.append('video[video_file]', this.state.videoFile)
        }
        this.props.createVideo(formData)

    }
    render(){
        return(
            <div class='upload-master-wrap'>
                    <form class='upload-form' onSubmit={this.handleSubmit}>
                        <div class='upload-container'>
                            <img src="upload.png" class='upload-image' alt=""/>
                            <div class='big-drag-text-wrap'>
                                <div class='big-drag-text'>Choose file to upload. Must be mp4 format.</div>
                            </div>
                            <div class="upload-btn-wrapper">
                                <button class="btn">
                                    <i class="fas fa-cloud-upload-alt">{" "}</i> 
                                    {` `}Pick a file
                                    <input class='inputfile' type='file' title=' '
                                onChange={this.handleFile} 
                                />
                                </button>
                            </div>
                        </div>
                        <div class='input-wrapping'>
                            <input class='upload-title'     
                                type="text"
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.handleInput('title')}/>
                            <input class='upload-description'
                                type="text"
                                placeholder='Description'
                                value={this.state.description}
                                onChange={this.handleInput('description')}/>
                            <button type='submit' class='submit-upload'>Upload</button>
                        </div>
                    </form>
            </div>
        )
    }
}
export default VideoUpload;