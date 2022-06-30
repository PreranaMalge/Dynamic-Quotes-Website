AOS.init();
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweetMe = document.getElementById("tweetMe");

let realData="";
let quotesData = "";

const tweetNow=()=>{
    console.log("triggered tweetnow")
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}  ${quotesData.author}`;
    window.open(tweetPost);
}

const getNewQuotes = () =>{
    let rnum = Math.floor(Math.random() * 20);
    quotesData=realData[rnum];

    quotes.innerHTML = `${quotesData.text}`;
    
    author.innerHTML = quotesData.author === null ?  "By unKnown" : `By ${quotesData.author}`;
};
const getQuotes = async () =>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        
    }catch(error) {
        console.log(error);
    }
};

tweetMe.addEventListener("click",tweetNow);
newQuotes.addEventListener('click',getNewQuotes);
getQuotes();