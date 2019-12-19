import React from 'react'
import Redirect from 'react-router-dom'

class VideoUpload extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            videoFile: null,
            thumbFile: null,
            video_url: null,
            thumb_url: null,
            title: "",
            description: "",
            uploader_id: null,
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

    handleFile(field) {
        return(e)=> {
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                if(field === 'thumbnail'){
                    this.setState({thumbFile: file, thumbUrl: fileReader.result});
                }else{
                    this.setState({videoFile: file, videoUrl: fileReader.result});
                }
            };
            if (file) {
                fileReader.readAsDataURL(file);
            }
        }
    }
    handleSubmit(){
        const formData = new FormData();
        formData.append('video[title]', this.state.title)
        // 
        formData.append('video[description]', this.state.description)
        if(this.state.videoFile){
            formData.append('video[video_file]', this.state.videoFile)
        }
        if(this.state.thumbFile){
            formData.append('video[thumbnail]', this.state.thumbFile)
        }
        this.props.createVideo(formData).then((response)=>{
            
            this.props.history.push(`/watch/${response.video.id}`)
        });
    }
    render(){
        const { errors } = this.props;
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
                                    { !this.state.videoFile ? 
                                    ` Pick a file` : ` Upload Successful`
                                    }
                                    <input class='inputfile' type='file' title=' '
                                onChange={this.handleFile('video')} 
                                />
                                </button>
                            </div>
                            <div class="upload-btn-wrapper">
                                <button class="btn">
                                    <i class="fas fa-cloud-upload-alt">{" "}</i> 
                                    { !this.state.thumbFile ? 
                                    ` Pick an image` : ` All done!`
                                    }
                                    <input class='inputfile' type='file' title=' '
                                onChange={this.handleFile('thumbnail')} 
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
                        <div class='upload-errors'>{
                            errors.length > 1 ? 
                            <div class='upload-error'>Oops, you seem to be missing some things</div> :
                            this.props.errors.map(error=>(
                                <div class='upload-error'>{ error }</div>
                            ))
                            }
                        </div>
                    </form>
            </div>
        )
    }
}
export default VideoUpload;