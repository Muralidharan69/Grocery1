class Button{
    constructor(){
        this.title = createElement('h2');
        this.openButton = createButton('OPEN');
        this.closeButton = createButton('CLOSE');
    }

    start(){
        closeRefrigerator = createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/2);
        closeRefrigerator.addImage(closeRefrigerator_Img);
        filledRefrigerator = createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/2);
        filledRefrigerator.addImage(filledRefrigerator_Img);
    }

    hide(){
        this.openButton.hide();
        this.closeButton.hide();
        openRefrigerator.hide();
        closeRefrigerator.hide();
        filledRefrigerator.hide();
    }

    show(){
        this.openButton.show();
        this.closeButton.show();
    }

    display(){
        this.title.html('Grocery Manager');
        this.title.position(displayWidth/2 + 200,0);
        //this.closeButton.position(displayWidth/2 - 100,displayHeight/2 - 20);
        this.openButton.position(displayWidth/2 - 100,displayHeight/2 -20);

        this.openButton.mousePressed(()=>{
             //refrigerator.changeImage(openRefrigerator);
             //closeRefrigerator.hide();
             //filledRefrigerator.hide();
             this.closeButton.show();
             this.closeButton.position(displayWidth/2 - 100,displayHeight/2 - 20);
          })

          this.closeButton.mousePressed(()=>{
            this.closeButton.hide();
          })

    }

}