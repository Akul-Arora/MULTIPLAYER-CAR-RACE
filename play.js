class player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    //listener for the database playerCount node
getCount(){
    db.ref("playerCount").on("value",(data)=>{
    playerCount=data.val()
    }
    )
}
//writer for playerCount node
updateCount(data){
    db.ref("/").update({
        playerCount:data
    })
}
//creating listener for player's node
static getplayerInfo(){
var  playerInforef=db.ref("players");
playerInforef.on("value",(data)=>{
    allPlayers=data.val()

})
}
// creating writer for player's node
update(){
    var playerIndex="players/player"+this.index
    db.ref(playerIndex).set({
name:this.name,
distance:this.distance

    }
    )
}
}