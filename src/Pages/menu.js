export default function Menu () {
	
	const content = document.getElementById("content");
	const menu = document.createElement("div");
	const title = document.createElement("h2");
	const cardSection = document.createElement("div");
	
	menu.id = "menuDiv";
	cardSection.id = "cardSection";
	title.innerText = "Our Menu";
	
	content.appendChild(menu);
	menu.appendChild(title);
	menu.appendChild(cardSection);
	
	const cardTitles = ["pizze", "drinks", "desserts"];
	cardTitles.forEach(title => {
		
		const categoryCard = document.createElement("div");
		categoryCard.classList.add(`${title}`);
		const categoryTitle = document.createElement("h3");
		
		categoryTitle.innerText = title;
		
		categoryCard.appendChild(categoryTitle);
		cardSection.appendChild(categoryCard);
	});
	
	const pizze = [
		{
			name: "Pizza Margherita",
			ingredients: "Tomato sauce, mozzarella, oregano, basil.",
			price: "8€",
		},
		{
			name: "Pizza Capricciosa",
			ingredients: "Tomato sauce, mozzarella, artichokes, ham, mushrooms, oregano.",
			price: "9,50€",
		},
		{
			name: "Pizza Pugliese",
			ingredients: "Tomato sauce, mozzarella, onions, oregano.",
			price: "8,50€",
		},
		{
			name: "Pizza Siciliana",
			ingredients: "Tomato sauce, mozzarella, anchovies, capers, oregano.",
			price: "8,50€",
		},
		{
			name: "Pizza salsiccia e friarielli",
			ingredients: "Mozzarella, sausage, rapini.",
			price: "9,50€",
		},
	];
	
	pizze.forEach(pizza => {
		const pizzaCard = document.createElement("div");
		const name = document.createElement("h4");
		const ingredients = document.createElement("p");
		const price = document.createElement("span");
		const pizzeContainer = document.querySelector(".pizze");
		
		pizzaCard.classList.add("item");
		
		name.innerText = pizza.name;
		ingredients.innerText = pizza.ingredients;
		price.innerText = pizza.price;
		
		pizzaCard.appendChild(name);
		pizzaCard.appendChild(price);
		pizzaCard.appendChild(ingredients);
		pizzeContainer.appendChild(pizzaCard);
	});
	
	const drinks = [
		{
			name: "Mineral Water",
			size: "1L | 0,5L",
			price: "2,50€ | 1,20€",
		},
		{
			name: "Sparkling Water",
			size: "1L | 0,5L",
			price: "2,75€ | 1,40€",
		},
		{
			name: "Carbonated Drinks",
			size: "0,33L",
			price: "2,50€",
		},
		{
			name: "Beer",
			size: "0,50L | 0,20L",
			price: "3,00€ | 2,00€",
		},
		{
			name: "Espresso",
			size: "single | double",
			price: "1,10€ | 2,00€",
		},
	];
	
	drinks.forEach(drink => {
		const drinkCard = document.createElement("div");
		const name = document.createElement("h4");
		const size = document.createElement("span");
		const price = document.createElement("p");
		const drinkContainer = document.querySelector(".drinks");
		
		drinkCard.classList.add("item");
		
		name.innerText = drink.name;
		size.innerText = drink.size;
		price.innerText = drink.price;
		
		drinkCard.appendChild(name);
		drinkCard.appendChild(size);
		drinkCard.appendChild(price);
		drinkContainer.appendChild(drinkCard);
	});
	
	const desserts = [
		{
			name: "Raspberry Cheesecake",
			price: "5€",
		},
		{
			name: "Apple Pie",
			price: "5€",
		},
		{
			name: "Gelato al Cioccolato",
			price: "3,50€",
		},
		{
			name: "Fruit Salad",
			price: "2,80€",
		},
	];
	
	desserts.forEach(dessert => {
		const dessertCard = document.createElement("div");
		const name = document.createElement("h4");
		const price = document.createElement("span");
		const dessertContainer = document.querySelector(".desserts");
		
		dessertCard.classList.add("item");
		
		name.innerText = dessert.name;
		price.innerText = dessert.price;
		
		dessertCard.appendChild(name);
		dessertCard.appendChild(price);
		dessertContainer.appendChild(dessertCard);
	});
}
