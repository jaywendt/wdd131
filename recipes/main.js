import recipes from './recipes.mjs';

function rng() {
    return Math.floor(Math.random()*9);
}

function getRandomRecipe(list) {
    const listLength = list.length;
    const ranRNG = rng(listLength);
    return list[ranRNG];
}

console.log(getRandomRecipe(recipes));

function recipeTemplate(recipe) {
    return <figure class="recipe">
            <img src="images1/apple-crisp.jpg" alt="image of apple crisp" />
            <div class="tags">
                <h3>Desserts</h3>
            </div>
            <h2><a href="#">recipe.name</a></h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: 4 out og 5 stars"
            >
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">⭐</span>
                <span aria-hidden="true" class="icon-star-empty">☆</span>
            </span>
            <p>"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."</p>
        </figure>;
}

function tagsTemplate(tags) {
    const tags = ['Waffles', 'Sweet Potato', 'Side', 'Chicken', 'Entree', 'Potatoes', 'Southwest', 'Indian', 'dessert', 'German'];
    const parser = new DOMParser();
    const html = parser.parseFromString(tags);
    return html;
}

function ratingTemplate(rating) {
    let html = <span>
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    </span>
}