export default function Home () {
	const content = document.getElementById("content");
	const homeContainer = document.createElement("div");
	const motto = document.createElement("h2");
	const section = document.createElement("section");

	homeContainer.id = "homeDiv";
	
	motto.innerText = "The flavour of authentic Italian cuisine since 1992.";
	section.innerHTML = "<h3>" + "Opening again on the 3rd of June! Come and try our new pizze and desserts!" + "</h3>"
		+ "<p>" + "Following the lifting of COVID restrictions, our pizzeria is opening again to the public, come and visit us!" + "</p>"
		+ "<p>" + "Book a table or order your delivery by clicking " + "<a>" + "here" + "</a>" + " or calling " + "<b>" + "+00 0123 456 789." + "</b>" + "</p>"
		+ "<p>" + "Visit us in Joram St. 89, Rivertown. We're open from " + "<b>" + "Tuesday to Sunday, from 18.00 to 22.30." + "</b></p>";
	
	homeContainer.appendChild(motto);
	homeContainer.appendChild(section);
	content.appendChild(homeContainer);
};
