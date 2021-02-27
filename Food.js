class Food{
    constructor(){
        this.foodstock = 10
    }
}

getFoodStock(){
    abc = database.ref('Food');
    abc.on("value",function(data){
        this.foodStock = data.val();
        concole.log(this.foodstock)
    });
    }

    updateFoodStock(food){
        this.foodstock = food;
        database.ref('/').update({
            Food:this.foodstock
        });
    }


