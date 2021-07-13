class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('GAMESTATE');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      GAMESTATE: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('PC').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(200,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(600,200);
    car1.addImage(car1i)
    car2.addImage(car2i)
    car3.addImage(car3i)
    car4.addImage(car4i)
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      //var display_position = 100;
      background(track2i)
      image(track1i,0,-displayHeight*4,displayWidth,displayHeight*5)
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 80;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 250;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          cars[index - 1].shapeColor = "red";
          fill("#00ffff")
          ellipse(x,y,200,200)
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
    if(      player.distance >4360      ){
      gameState=2
    }
    
    drawSprites();
  }
  end() {
    var b=createElement("h1")
    b.html("you won the newest macbook")
    b.position(displayWidth/2,displayHeight/2)
    
  }
}
