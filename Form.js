class Form{

    constructor(){
        this.input = createInput("Name of grocery");
        this.addWeight = createInput("Add the Weight");
        this.subtractWeight = createInput("Subtract the Weight");
        this.vegetableButton = createButton('Vegetables');
        this.fruitButton = createButton('Fruits');
        this.cerealButton = createButton('Cereals');
        this.previousButton = createButton('Back');
        this.confirmationButton = createButton('OK');
    }

    hide(){
        this.input.hide();
        this.addWeight.hide();
        this.subtractWeight.hide();
        this.vegetableButton.hide();
        this.fruitButton.hide();
        this.cerealButton.hide();
        this.previousButton.hide();
        this.confirmationButton.hide();
    }

    show(){
        this.input.show();
        this.addWeight.show();
        this.subtractWeight.show();
        this.vegetableButton.show();
        this.fruitButton.show();
        this.cerealButton.show();
        this.previousButton.show();
    }

    display(){
        //this.input.position(displayWidth/2 + 600, displayHeight/2 - 100);
        //this.addWeight.position(displayWidth/2 + 600, displayHeight/2 - 50);
        //this.subtractWeight.position(displayWidth/2 + 600, displayHeight/2 - 20);
        this.vegetableButton.position(displayWidth/2 + 600, displayHeight/2 + 10);
        this.vegetableButton.mousePressed(()=>{
            this.vegetableButton.hide();
            this.fruitButton.hide();
            this.cerealButton.hide();
            this.input.position(displayWidth/2 + 600, displayHeight/2 - 100);
            this.addWeight.position(displayWidth/2 + 600, displayHeight/2 - 50);
            this.subtractWeight.position(displayWidth/2 + 600, displayHeight/2 - 20);
            this.confirmationButton.position(displayWidth/2 + 800, displayHeight/2 - 50);
        })

        this.fruitButton.position(displayWidth/2 + 600, displayHeight/2 + 60);
        this.fruitButton.mousePressed(()=>{
            this.fruitButton.hide();
            this.vegetableButton.hide();
            this.cerealButton.hide();
            this.input.position(displayWidth/2 + 600, displayHeight/2 - 100);
            this.addWeight.position(displayWidth/2 + 600, displayHeight/2 - 50);
            this.subtractWeight.position(displayWidth/2 + 600, displayHeight/2 - 20);
            this.confirmationButton.position(displayWidth/2 + 800, displayHeight/2 - 50);
        })

        this.cerealButton.position(displayWidth/2 + 600, displayHeight/2 + 110);
        this.cerealButton.mousePressed(()=>{
            this.cerealButton.hide();
            this.vegetableButton.hide();
            this.fruitButton.hide();
            this.input.position(displayWidth/2 + 600, displayHeight/2 - 100);
            this.addWeight.position(displayWidth/2 + 600, displayHeight/2 - 50);
            this.subtractWeight.position(displayWidth/2 + 600, displayHeight/2 - 20);
            this.confirmationButton.position(displayWidth/2 + 800, displayHeight/2 - 50);
        })

        //this.confirmationButton.position(displayWidth/2 + 800, displayHeight/2 - 50);
        this.confirmationButton.mousePressed(()=>{
            this.input.hide();
            this.addWeight.hide();
            this.subtractWeight.hide();
            this.vegetableButton.show();
            this.fruitButton.show();
            this.cerealButton.show();
            this.confirmationButton.hide();
        })
    }

}