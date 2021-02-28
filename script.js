
        function rpsgame(yourchoice){
            console.log(yourchoice);
            var humanchoice,botchoice;
            humanchoice =yourchoice.id;
            botchoice = numbertochoice(randtorpsint());
            
            results = decidewinner(humanchoice,botchoice);
            message=finalmessage(results);
            rpsfrontend(yourchoice.id,botchoice,message);
        }
        function randtorpsint(){
            return Math.floor(Math.random()*3);
        }
function numbertochoice(number){
    return['rock','paper','scissors'][number];
}
function decidewinner(yourchoice,cchoice){
    var rpsdatabase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
    var yourscore =  rpsdatabase[yourchoice][cchoice]
    var botscore  = rpsdatabase[cchoice][yourchoice]
    return [yourscore,botscore];   

}
        
        function finalmessage([yourscore,botscore]){
            if(yourscore===0){
                return {'message':'You Lost','color':'red'};
                
            }
            else if(yourscore===0.5){
                return{'message':'You Tied','color':'yellow'};

            }else if(yourscore===1){
                return{'message':'You Won','color':'green'};}
        }
        function rpsfrontend(humanimgchoice,botimgchoice,fmessage){
         var imagesdatabase=  {
             'rock':document.getElementById('rock').src,
             'paper':document.getElementById('paper').src,
             'scissors':document.getElementById('scissors').src,

         }//remove images

         document.getElementById('rock').remove();
         document.getElementById('paper').remove();
         document.getElementById('scissors').remove();
         var humandiv=document.createElement('div');
          var botdiv=document.createElement('div');
          var message=document.createElement('div');
          humandiv.innerHTML="<img src='"+imagesdatabase[humanimgchoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
          botdiv.innerHTML="<img src='"+imagesdatabase[botimgchoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"

message.innerHTML="<h1 style='color:"+fmessage['color']+"; font-size 60px; padding 30px;'>"+fmessage['message']+"</h1>"
          document.getElementById('flex-box-rps-div').appendChild(humandiv);
          document.getElementById('flex-box-rps-div').appendChild(message);
          document.getElementById('flex-box-rps-div').appendChild(botdiv);
        }
        
        
       