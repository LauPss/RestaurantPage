import mapImg from "../Images/map.png";

export default function Contacts () {
	const content = document.getElementById("content");
	const contactsContainer = document.createElement("div");
	const title = document.createElement("h2");
	const paragraphContainer = document.createElement("div");
	const paragraph = document.createElement("p");
	const map = document.createElement("img");
	
	contactsContainer.id = "contactsDiv";
	paragraphContainer.classList.add("parCont");
	
	title.innerText = "Contacts";
	paragraph.innerHTML = "<b>" + "Lichu's Pizzeria" + "<b><br>" 
						+ "Joram Street, 89, Riverwood." + "<br>"
						+ "Phone: +00 0123 456 789" + "<br>"
						+ "FAX: +00 0012 001 002" + "<br>";
	map.src = mapImg;
	
	contactsContainer.appendChild(title);
	paragraphContainer.appendChild(paragraph);
	paragraphContainer.appendChild(map);
	contactsContainer.appendChild(paragraphContainer);
	content.appendChild(contactsContainer);
}
