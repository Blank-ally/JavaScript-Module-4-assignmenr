import { recipes } from "/src/js/data/recipe.js";
$(function () {

    for (let i = 0; i < recipes.length; i++) {

        $('#cardList').append(`
            <div>
            <div class='card'>
            <div class='image'><img src="${recipes[i].image}"></div>
            <div class='content'>
            <p>Total Time: ${recipes[i].completionTime}</p>
                <p>${recipes[i].recipeName}</p>
                <p>${recipes[i].category}</p>
                <input type='button' value='More info' id="moreInfo">
            </div>
            </div>

            <div class='card-more-info'style='display:none' >
            <p><b>Ingredients</b></p>
            <br>
            <p>${recipes[i].ingredients}</p>
            <br>
            <p><b>Instructions</b></p>
            <br>
            <p>${recipes[i].description}</p>
            </div>
            </div>` )
    }


    $('.card').on("click", function (e) {
        // console.log(e.target)
        let $target = $(e.target).closest('.card')
        $target.siblings().show('.card-more-info')
    })

    $('#course').on('submit', function (e) {
        e.preventDefault()
        $('#cardList').html('');
    
        let isApp = document.getElementById('Appetizer').checked
        let isDes = document.getElementById('Dessert').checked
        let isEnt = document.getElementById('entree').checked

        recipes.forEach(recipe => {
            if (!isApp && !isDes && !isEnt) { showRecipe(recipe); }

            else if ((isApp && recipe.category == 'Appetizer') || (isDes && recipe.category == 'Dessert') || (isEnt && recipe.category == 'Entrée')) {

                showRecipe(recipe)
            }
        })
        $('.card').on("click", function (e) {
            // console.log(e.target)
            let $target = $(e.target).closest('.card')
            $target.siblings().show('.card-more-info')
        })
    })


        function showRecipe(recipe) {
            $('#cardList').append(`
        <div>
        <div class='card'>
        <div class='image'><img src="${recipe.image}"></div>
        <div class='content'>
        <p>Total Time: ${recipe.completionTime}</p>
            <p>${recipe.recipeName}</p>
            <p>${recipe.category}</p>
            <input type='button' value='More info' id="moreInfo">
        </div>
        </div>
        
        <div class='card-more-info'style='display:none' >
        <p><b>Ingredients</b></p>
        <br>
        <p>${recipe.ingredients}</p>
        <br>
        <p><b>Instructions</b></p>
        <br>
        <p>${recipe.description}</p>
        </div>
        </div>
        ` )
        }
    
    
    
    })