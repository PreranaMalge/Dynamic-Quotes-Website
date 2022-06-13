AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
// const tweetMe = document.querySelector("#tweetMe");
const tweetMe = document.getElementById("tweetMe");

let realData="";
let quotesData = "";

// const tweetNow = () =>{
//     let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
//     window.open(tweetPost);
//     console.log("tweetme.......");
// }

const tweetNow=()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}  ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () =>{
    let rnum = Math.floor(Math.random() * 20);
    quotesData=realData[rnum];
    //console.log(rnum);
    //console.log(realData[rnum].author);
    quotes.innerHTML = `${quotesData.text}`;
    
    author.innerHTML = quotesData.author === null ?  "By unKnown" : `By ${quotesData.author}`;
};
const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        //  console.log(realData.length);
        // console.log(realData[10].text);
        // console.log(realData[10].author);
        
    }catch(error) {
        console.log(error);
    }
};
// tweetMe.addEventListener('click',tweetNow);
// tweetMe.addEventListener("click",()=>{
//     let tweeturl = `https://twitter.com/intent/tweet?text===>url ${"tweeturl.innerHTML"});`
//     window.open(tweeturl,"_blank");
// })
tweetMe.addEventListener("click",tweetNow);
newQuotes.addEventListener('click',getNewQuotes);
getQuotes();