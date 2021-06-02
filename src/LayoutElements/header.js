export default function Header() {
	const header = document.createElement("header");
	const restName = document.createElement("h1");
	const nav = document.createElement("nav");
	const content = document.getElementById("content");
	
	restName.innerText = "Lichu's Pizzeria";
	
	header.appendChild(restName);
	
	const links = ["Home", "Menu", "Contacts"];
	links.forEach(link => {
		const page = document.createElement("button");
		page.classList.add("navLinks");
		page.id = link;
		page.innerText = link;
		nav.appendChild(page);
	});
	
	header.appendChild(nav);
	document.body.insertBefore(header, content);
};
