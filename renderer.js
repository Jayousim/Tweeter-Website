const source = $('#post-template').html();
const template = Handlebars.compile(source)
const container = $('#container')
const Renderer = function(){

    const renderPosts = function(posts){
        container.empty();
        for(p of posts){
            const newHTML = template({post: p});
            container.append(newHTML)
        }
    }
    return{
        renderPosts: renderPosts
    }
}

