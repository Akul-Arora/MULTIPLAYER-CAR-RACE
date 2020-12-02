class Game{
    constructor(){

    }
    //listner for gameState
getState(){
    db.ref("gameState").on("value",(data)=>{
    gameState=data.val()  
  })
}




    //writer for gameState

update(data){
    db.ref("/").update({
        gameState:data
    })
    
}





    //start state

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    }
}