


const Tweeter = function(){

    const tweets = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    
    var idCount = 2
    var commentIdCount = 6
    const addPost = function(post){
        let postObj = { text: post,
            id: "p" + idCount.toString(10),
            comments: []       
         }
        tweets.push(postObj)
        idCount += 1
        return postObj
    }
    const removePost = function(postId){
        for(i in tweets){
            if(tweets[i].id === postId){
                tweets.splice(i,1)
                break
            }
                
        }

    }
    const addComment = function(comment, postId){
        for(i in tweets){
            if(tweets[i].id === postId)
                tweets[i].comments.push({id: "c" + commentIdCount.toString(10), text: comment})
        }
        commentIdCount += 1
    }

    const removeComment = function(postId, commentId){
        for(i in tweets){
            if(tweets[i].id === postId){
                for(j in tweets[i].comments){
                    if(tweets[i].comments[j].id === commentId){
                        tweets[i].comments.splice(j, 1)
                        break
                    }
                }
            }
        }
    }

    const getPosts = function(){
        return tweets
    }
    const getComments = function(postId){
        for(i in tweets){
            if(tweets[i].id === postId){
                return tweets[i].comments
            }
        }
    }
    return {
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment,
        getPosts: getPosts,
        getComments: getComments
    }
}


