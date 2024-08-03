let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav a");
window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			navlinks.forEach((link) => {
				link.classList.remove("active");
			});
			document.querySelector(`nav a[href='#${id}']`).classList.add("active");
		}
	});
};

let hidenav = document.getElementById("hidenav");
let mobbutton = document.querySelector(".mobile-view");
let nav = document.getElementById("nav");
hidenav.onclick = () => {
	if (nav.style.top != "60px") {
		nav.style.top = "60px";
		mobbutton.classList.add("mob-view-btn-bcg");
	} else {
		nav.style.top = "-100%";
		mobbutton.classList.remove("mob-view-btn-bcg");
	}
};
