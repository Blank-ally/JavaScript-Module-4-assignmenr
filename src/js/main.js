import { recipes } from "/src/js/data/recipe.js";
$(function(){
 //For testing. Delete this. 


 for (let i = 0; i < recipes.length; i++) {

    $('#cardList').append(`
<div class='card'>
<div class='image'><img src="${recipes[i].image}"></div>
<div class='content'>
<p>Total Time: ${recipes[i].completionTime}</p>
    <p>${recipes[i].recipeName}</p>
    <p>${recipes[i].category}</p>
  </div>
<div class='card-more-info hide'>
<p>${recipes[i].description}</p>
<p>${recipes[i].ingredients}</p>

</div>
</div>

` )


    //Total Time:${recipes[i].completionTime}
    // <img src='${recipes[i].image}'>
    // <p>${recipes[i].description}</p>
    // <p>${recipes[i].ingredients}</p>
}

$('#cardList').on("click", function(e) {
   
   let $target = $(e.target).closest('.card')
        $target.removeClass('hide')


})

$('#course').on('submit',function(e){
        
  let isApp = document.getElementById('Appitiezer').checked
  let isDes = document.getElementById('Dessert').checked
  let isEnt = document.getElementById('entree').checked
  
  recipes.forEach(recipe => {
    if((!isApp|| isApp && recipe.category == 'Appitiezer' )&& (!isDes || recipe.category == 'Dessert')&&(!isEnt || recipe.category == isEnt)){
      console.log(true)
  }});
  
})









})