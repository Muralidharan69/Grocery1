class Fruits{
    constructor(){
    }

    getFruitsName(){
        var FruitsRef  = database.ref('name');
        FruitsRef.on("value",function(data){
       name = data.val();
         })
    }

    addWeight(){

    }
    
    subtractWeight(){
        
    }

    getCerealsWeight(){
        var FruitsRef  = database.ref('Added Weight');
        FruitsRef.on("value",function(data){
        addedWeight = data.val();
     })

    }

    update(){
        getFruitsName.update();
        getFruitsWeight.update();
    }
}