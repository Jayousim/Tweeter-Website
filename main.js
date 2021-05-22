
class Controller{
    constructor(){

        const tweeter = Tweeter()
        const renderer = Renderer()

        const removePost = function(){
            const obj = $(this).closest(".post")
            const id = obj.attr('id')
            tweeter.removePost(id)
            renderer.removePost(obj)
        }

        function hideComments(){
            const obj = $(this).closest(".post")
            renderer.hideComments(obj)
            $(this).click(showComments)
        }
        function showComments(){
            const obj = $(this).closest(".post")
            const id = obj.attr('id')
            renderer.renderComments(obj, tweeter.getComments(id))
            $(this).click(hideComments)
        }
        const addPost = () =>{
            const post = this.postBox.val()
            const postObj = this.tweeter.addPost(post)
            const newDomPost = this.renderer.addPost(postObj)
            newDomPost.children('.remove').click(removePost)
        }

        const addComment = function(){
            const postObj = $(this).closest(".post")
            const id = postObj.attr('id')
            const comment = postObj.children("#comment-name").val()
            tweeter.addComment(comment, id)
        }
        this.tweeter = tweeter
        this.renderer = renderer
        this.postBox = $("#post-box")
        this.renderer.renderPosts(this.tweeter.getPosts())
        $('.remove').click(removePost)
        $('#twit_button').click(addPost)
        $(".show-comments").click(showComments)
    }
}

let controller = new Controller()