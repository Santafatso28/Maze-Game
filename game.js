 
class player  {
    
    constructor (SpawnLocationX,SpawnLocationY,CurrentScene) {
        //create a physical player object and setup physics values
        this.Character = CurrentScene.add.sprite(SpawnLocationX,SpawnLocationY,"Character")
        console.log(CurrentScene.physics.World)
        console.log(this.Character)

        this.Character.Body = new Phaser.Physics.Arcade.Body(CurrentScene.physics.World,this.Character)
        this.Character.depth = 10
        this.Character.visible = true
        CurrentScene.add.existing(this.Character);
        CurrentScene.physics.add.existing(this.cameraFilter);
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
    function clamp (x, min, max) {
        if (x < min) {
            x = min
        }
        if (x>max) {
            x == max
        }
        return x

    }
    function create () {
        Player =  new player(600,300,this)
        let background = this.add.tileSprite(game.config.width/2, game.config.height/2, game.config.width, game.config.height, 'sky') 
        TimerImage = this.add.text(0,0,TimeRemaining.toString())
        
    }
    function LoseGame() {
        //display lose game screen and get rid of input connections

    }
    function update (t,dt)
    {
      //take player input
        if (keys.F.isDown) {
            Player.Character.setVelocityX(5)
        }
        if (keys.S.isDown) {
            Player.Character.setVelocityX(-5)
        }
        if (keys.D.isDown) {
            Player.Character.setVelocityY(5)
        }
        if (keys.E.isDown) {
            Player.Character.setVelocityY(-5)
        }
    //update the timer
    
    TimeRemaining = clamp((TimeRemaining- (dt/1000)),0,20)
    TimerImage.setText(TimeRemaining.toString())

    //Lose the game if timer reaches 0
    if (TimeRemaining == 0) {

    }

//commit change - abby
    }
