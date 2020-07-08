class Cereals{
    constructor(){
    }

    getCerealsName(){
        var cerealsRef  = database.ref('name');
       cerealsRef.on("value",function(data){
       name = data.val();
         })

    }

    addWeight(){

    }
    
    subtractWeight(){
        
    }

    getCerealsWeight(){
        var cerealsRef  = database.ref('Added Weight');
        cerealsRef.on("value",function(data){
        addedWeight = data.val();
     })

    }

    update(){
        getCerealsWeight.update();
        getCerealsName.update();
    }
}