
var waitimg
var play,about,playimg,howimg,back,backimg,reset,resetimg,home
var gameState="wait"
var bgimg, popup,popupimg
var canvas

function preload(){
waitimg=loadImage("bg1.png")

bgimg= loadImage("logo.gif")
buttonimg=loadImage("button.png")
playimg=loadImage("Marathon.PNG")

popupimg = loadImage("Popup.png")
trackimg=loadImage("Track1.PNG")

player1img= loadAnimation("player1/p1.jpg","player1/p2.jpg","player1/p3.jpg","player1/p4.jpg","player1/p5.jpg","player1/p6.jpg")

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)


play=createImg("play1.png")
play.position(width/2,height-190)
play.size(200,200)

home=createImg("home.png")
home.position(0,0)
home.size(200,200)
home.hide();

about=createImg("how1.png")
about.position((width/2)-200,height-190)
about.size(200,200)
about.hide()

track=createSprite(width/2,height/2,width,height)
track.addImage(trackimg)
track.scale=6
track.visible=false

runner=createSprite(50,height-100)
runner.addAnimation("run",player1img)

/*back=createImg("buttonplain.png")
back.position(play.x+200,height-200)
back.size(200,200)*/

/*reset=createImg("Reset.png")
reset.position(100,700)*/

logo=createSprite(windowWidth/2,windowHeight/2.75)
logo.addImage(bgimg)
logo.scale=2.5


popup=createSprite(width/2,height/2)
popup.addImage(popupimg)
popup.scale=7.5
popup.visible=false


}

function draw(){

    if(gameState==="wait"){
background(waitimg)
play.show()
    about.show()
    logo.visible=true
    home.hide()
    popup.visible=false
    track.visible=false

}


play.mousePressed(()=>{
    gameState="playstate"
    background(180)
    
})

if(gameState==="playstate"){
    play.hide()
    about.hide()
    logo.visible=false
    home.show()
    popup.visible=false
    track.visible=true

    track.velocityX= -15
    if(track.x<=width/4){
        track.x=width/2
    }

}

home.mousePressed(()=>{
    gameState="wait"
})


about.mousePressed(()=>{
    gameState="howstate"
 
})

if(gameState==="howstate"){
  
    popup.visible=true

}

drawSprites()
}