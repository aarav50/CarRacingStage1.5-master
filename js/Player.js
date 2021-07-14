class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
this.db=null
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('PC');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PC: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
 blabla() {
  database.ref('rank').on("value",(data)=>{
   
      this.db = data.val();
  })

}
static blablabla(data){
  database.ref('/').update({rank:data})

}
}
