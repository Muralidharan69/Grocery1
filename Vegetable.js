class Vegetable{
    constructor(){
    }

    getVegetablesName(){
        var VegetablesRef  = database.ref('name');
        VegetablesRef.on("value",function(data){
       name = data.val();
         })
    }

    addWeight(){
         
    }
    
    subtractWeight(){
        
    }

    getVegetablesWeight(){
        var VegetablesRef  = database.ref('Added Weight');
        VegetablesRef.on("value",function(data){
        addedWeight = data.val();
     })

    }

    update(){
        getVegetablesName.update();
        getVegetablesWeight.update();
    }
}