# Grimeo

## Overview

grimeo.herokuapp.com

Grimeo, pornounced 'grim-ee-oh' is a clone of the popular video hosting website Vimeo, with a darker visual style and halloween themed content.

As of today Grimeo has the following functionality.

* Users can create accounts, login into those created accounts and login through a randomly generated 
    'Demo Login' to browse the site without the hassle of typing in their credentials.

* Once logged in those users can:

    - Upload videos

    - Follow links to `<UserShow>` presentational component which shows an index of all videos uploaded by a given user.

    - Comment on videos.

---

# Essential Features 

## User Pages

Grimeo is a place to show off your individuality, so having a page that represents your brand is important. If a user likes your work they can simply click on your username wherever it may be on the site and be redirected to a page that shows off all of your content. The styling was reused from the `<VideoIndex>` component with some slight adjustments. 

![User-Show](https://grimeo-seeds.s3.amazonaws.com/User-show.png "user-show")


Videos shown on the page were put in state by having the VideosReducer listening to the FetchUser action and returning the 'videos' payload of the show.json.jbuilder associated with the backend 'show' method in the UsersController.

```ruby
    json.user do 
    json.partial! "/api/users/user", user: @user
end

json.videos do 
    @user.videos.each do |video|
        json.set! video.id do
            json.extract! video, :id, :title, :description, :user_id, :uploader
            json.thumbnailUrl url_for(video.thumbnail)
            json.videoUrl url_for(video.video_file)
        end
    end
end
```

After, in the `<UserShow>` component, the Videos in state are filtered by their associated `<user_id>`.

```javascript
componentDidMount(){
        this.props.fetchUser(this.props.id);
    }
    render(){
        if(!this.props.userPage){
            return null
          }
        const {videos, userPage, currentUser} = this.props;
        const userVideos = videos.filter(video=>video.user_id === userPage.id);
```
## Uploading Videos and Hosting on AWS

Shring content is the backbone of Grimeo, so uploading needed to be seemless and easy. With a few clicks by the user their videos are uploaded and they are redirected to the video they just uploaded.

```javascript
handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    if(this.state.videoFile){
        formData.append('video[video_file]', this.state.videoFile);
    }
    if(this.state.thumbFile){
        formData.append('video[thumbnail]', this.state.thumbFile);
    }
    this.props.createVideo(formData).then((response)=>{
        this.props.history.push(`/watch/${response.video.id}`);
    });
}
```
## Posting, Deleting and Editing Comments

While Grimeo is a video hosting website, feedback is a large part of the experience. Grimeo has a strong community of encouraging creatives who like discussing, complimenting and or critquing eachothers work. After implementing the video hosting and posting functionality, careful thought went into making the social experience of the app user friendly.For example, when editing a post the text dissapears and is replaced with an edit form.

![Comment-Snippet-1](https://grimeo-seeds.s3.amazonaws.com/comment-1.png "comment-1")
![Comment-Snippet-2](https://grimeo-seeds.s3.amazonaws.com/comment-2.png "comment-2")
![Comment-Snippet-3](https://grimeo-seeds.s3.amazonaws.com/comment-3.png "comment-3")

This was difficult to implement because after passing the `<"PATCH">` request to the database the fontend needed to be aware that the request had been made and replace the edit component with the edited text. This was achieved with a boolean `<closeForm>` which indicated wheter the form had been edited which was then changed `<onSubmit>`.

```javascript
handleSubmit(e){
        e.preventDefault();

        const comment = Object.assign({}, this.state);
        this.props.updateComment(comment).then(this.closeForm(true))
    }


    render(){
        return(
            <div class='edit-form-master'>
                {
                    this.state.closeForm === false ? 
                    <div class='comment-form-wrapper'>
                        <div class='comment-form-user-icon-box'>
                            <div class='comment-form-user-icon'></div>
                        </div>
                        <div class='comment-form-prompt-and-body'> 
                            <form onSubmit={this.handleSubmit}>
                                <input 
                                type="text" 
                                class='comment-form-body'
                                value={this.state.body}
                                onChange={this.updateState('body')} 
                                />
                                <div class='add-comment-wrapper'>
                                    <button class='edit-comment-submit'type='submit' >Edit</button>
                                    <button class='cancel-edit'onClick={()=>this.closeForm(true)}>Cancel</button>
                                </div>
                            </form>
                        </div>
                </div>
                :
                <div class='comment-body'>
                    <div class='comment-body'>{this.state.body}</div>
                </div>
```

Comments were brought into the state by listening to the `<VideosReducer>` and gathering all comments associated with the video

```javascript
case RECEIVE_VIDEO:
    return action.video.comments;
```

# Technologies Used

* Ruby on Rails
* PostgresSQL
* JSON jbuilder
* React-Redux

# Features to be Implemented

* Editing a Video
* Liking Videos
* Searching for videos
* Logging in with Socials

I'll see you on Grimeo.

![Grimeo-Logo](https://grimeo-seeds.s3.amazonaws.com/grimeo-logo.png "grimeo-logo")

grimeo.herokuapp.com



