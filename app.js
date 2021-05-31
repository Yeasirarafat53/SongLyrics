         // simple vabe search box and button k acces kora hoice

         let input = document.getElementById("searchBox");
         document.getElementById("src-btn").addEventListener('click',function(){
            
         document.getElementById("search-result").innerHTML = '';
 
 //  fetch use kore seacrh box theke song name take acces kora hoice
         fetch(`https://api.lyrics.ovh/suggest/${input.value}`)
             .then(res=>res.json())
             .then(data=>{
                 // aita kora hoice sudhu data guloke fetchdata er moddhe pass kore next a lyrics ber korar  jonno song name r artist name lagbe tai apadoto ai data gulote fethdata te rakha hoice
                 fetchData = data;
                // for loop use kora hoice jno minimun 10 ta data por por website a show kore
                 for (let i = 0; i < data.data.length; i++) {
                     let songTitle = data.data[i].title;
                     let artistName = data.data[i].artist.name;
                     // condition use kora hoice jno 10 ta data website a dekhay
                     if (i==10) {
                         break;
                     } ;
                     // aita kora hoice j ami websie a jekhane data gula dekhatechai seikhane jno show kore and design hishebe bootstrap use kore desing kore then data gulo show korano hoice 
                    document.getElementById("search-result").innerHTML += `<div class="row style" > 
                     
                                                                             <div class="col-md-9">
                                                                                 <h3>${songTitle}</h3>
                                                                                 <h5>Album by <span>${artistName}</span></h5>
                                                                             
                                                                             </div>
 
                                                                             <div class="col-md-3  ">
                                                                                 <a href="#get-lyrics"><button onclick="getLyrics(${i})" class=" button btn btn-success">Get Lyrics</button> </a>
                                                                             </div>
 
            
 
                                                                         </div>`; 
 
    
                 }
                 
                
             })
            
                 
          })
 
 
 // ai function ta use kora hoice (get lyrics) button theke jate kore button click korle jno lyrics ta show kore website a
          
         function getLyrics(index){
             // jehetu title and artist er data fetchdata te rekhe dichilam tai seta use kore akta variable er moddhe rakha hoice jno (api) use kore lyrics ta pai
             const title = fetchData.data[index].title;
             const artist = fetchData.data[index].artist.name;
             // aikhane fetch use kore api er moddhe uporer 2 ta varaible pass kore amra lyrich take access koreci
             fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
             .then(res=>res.json())
             .then(data=>{
                 // akhane kora hoice holo data er sathe song er lyrics jetar moddhe ace setake access kora hoice ..r song er lyrics ta (lyrics) name er akta json object property er moddhe chilo tai data er sathe sei (lyrics) property take access kora hoice..airokom dekhete ...tai data er moddhe lyrics take catch kora hoice
                 // {"lyrics":"Oh whoa, Oh whoa, Oh whoa\r\nYou know you love me"}
 
                 const songLyrics =data.lyrics;
 
                 // if (songLyrics==undefined) {
                 // // alert("no lyrics available...please try again letter..!!!!")
                 // console.log("no lyrics fonund");
                 // }
 
                     // lyricsh jekhane show korbe sei id take acces kore setar shob data{innerHTML} take songlyrics name er variable er moddhe pass kora hoice and setake <pre> tag er moddhe rakha hoice jno lyrics take shundor akta format a dekhay
                 document.getElementById("get-lyrics").innerHTML = `<pre>${songLyrics}</pre>`;
             })
 
 
         }    
                 
      
 