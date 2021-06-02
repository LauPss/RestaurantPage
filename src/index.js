import "./Styles/index.css";
import Header from "./LayoutElements/header.js";
import Home from "./Pages/home.js";
import Menu from "./Pages/menu.js";
import Contacts from "./Pages/contacts.js";

const DisplayHeader = (() => {
	Header();
})();

const DisplayDefault = (() => {
	Home();
})();

const DisplayTab = (() => {
	const tabs = document.querySelectorAll(".navLinks");
	tabs.forEach(tab => {
		tab.addEventListener("click", (e) => {
			const content = document.getElementById("content");
			content.innerHTML = "";
			if (tab.id === "Home") {
				Home();
			} else if (tab.id === "Menu") {
				Menu();
			} else if (tab.id === "Contacts") {
				Contacts();
			}
		});	
	});
})();


