 
class player  {
    
    constructor (SpawnLocationX,SpawnLocationY,CurrentScene) {
        //create a physical player object and setup physics values
        console.log(game.scene)

        this.Character = CurrentScene.add.sprite(SpawnLocationX,SpawnLocationY,"Character")
        this.Character.depth = 10
        this.Character.visible = true

        //setup health and damage
        this.health = 100
        this.damage = 40
        

        
        //create character input connections 
        keys = CurrentScene.input.keyboard.addKeys("E,S,F,D")
        
    }

}

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default:  "arcade",
            aracade: {
                gravity : 0,
                debug : true
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    var game = new Phaser.Game(config);
    var Player;
    var keys;
    var TimerImage;
    var TimeRemaining  = 20

    function preload ()
    {
        this.load.image("Character", "Assets/Character.png")
        this.load.image("sky", "Assets/Background.png")
        
    }

    function create () {
        Player =  new player(600,300,this)
        let background = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height, 'sky') 
        TimerImage = this.add.text(0,0,TimeRemaining.toString())
    }

    function update (t,dt)
    {
      //take player input
        if (keys.F.isDown) {
            console.log("f")
        }
        if (keys.S.isDown) {
            console.log("S")
        }
        if (keys.D.isDown) {
            console.log("D")
        }
        if (keys.E.isDown) {
            console.log("E")
        }
    //update the timer
    
    TimeRemaining = Math.Clamp(TimeRemaining- (dt/1000),0,20)
    TimerImage.setText(TimeRemaining.toString())

    //Lose the game if timer reaches 0
    if (TimeRemaining == 0) {

    }

//commit change - abby
    }
