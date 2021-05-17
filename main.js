

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
const attachEvents = function(){
    
}
const removePost = function(){
    const id = $(this).closest(".post").attr('id')
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
    $('.remove').click(removePost)
}


$('.remove').click(removePost)