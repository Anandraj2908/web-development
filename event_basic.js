const tweetForm=document.querySelector('#tweetForm')
const tweetsContainer=document.querySelector('#tweets');
tweetForm.addEventListener('submit',function(e){
    //console.log("SUBMIT!!")
    e.preventDefault();
    const username=tweetForm.elements.username.value;
    const tweet=tweetForm.elements.tweet.value;
    const newTweet=document.createElement('li');
    const bTag=document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    tweetsContainer.append(newTweet);
});