


const Renderer = function(){
    const renderPosts = function(posts){
        for(p of posts){
            $("#container").append(`<div> ${p.text}</div>`);
        }
    }
    return{
        renderPosts: renderPosts
    }
}
