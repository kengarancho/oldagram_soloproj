const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let finalOutput = document.getElementById("final-output")

    for(let i=0; i < posts.length; i++) {
    finalOutput.innerHTML += `<section class="content">
            <div class="user-info-container">
                <div class="user-image">
                    <img id="avatar" class="user-avatar" src=${posts[i].avatar}> 
                </div>
                <div class="user-details">
                    <p class="user-name" id="name">${posts[i].name}</p>
                    <p class="user-location" id="location">${posts[i].location}</p> 
                </div>
            </div>
        </section>
        
        <section>
            <div class="details-container">
                <img id="post" class="post-image" src="${posts[i].post}">
                <div class="icon-container">
                    <img class="icon" src="images/icon-heart.png">
                    <img class="icon" src="images/icon-comment.png">
                    <img class="icon" src="images/icon-dm.png">
                </div>
                <p id="likes" class="post-likes">${posts[i].likes}</p>
                <div class="username-caption">
                    
                    <p id="comment" class="post-caption"><span class="user-post" id="username">${posts[i].username}</span>${posts[i].comment}</p>
                </div>
            </div>
        </section>`
}
 

