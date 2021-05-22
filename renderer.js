const source = $('#post-template').html();
const template = Handlebars.compile(source)
const sourceCommentsT = $('#comment-template').html();
const commentsTemplate = Handlebars.compile(sourceCommentsT)
const container = $('#container')

const Renderer = function(){
    const renderSingleP = function(p){
        const newHTML = template({post: p});
        container.append(newHTML)
        console.log(container.children().last())
        return container.children().last()
    }
    const renderPosts = function(posts){
        container.empty();
        for(p of posts){
            renderSingleP(p)
        }
    }

    const removePost = function(postObj){
        postObj.remove()
    }

    const addPost = function(post){
        return renderSingleP(post)
    }
    const renderComments = function(postObj, comments){
        const commentsContainer = postObj.children(".comments-container").children(".comments-list")
        let newHTML = commentsTemplate({comments: comments});
        commentsContainer.append(newHTML)
        
    }

    const hideComments = function(postObj){
        const commentsContainer = postObj.children(".comments-container").children(".comments-list")
        commentsContainer.empty()
    }
    return{
        renderPosts: renderPosts,
        removePost: removePost,
        addPost: addPost,
        renderComments: renderComments,
        hideComments: hideComments
    }
}


