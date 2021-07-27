(function(d){
let tabs = Array.prototype.slice.apply(d.querySelectorAll(".tabs__item")
let panels = Array.prototype.slice.apply(d.querySelectorAll(".panels__item");
d.getElementById("tabs").addEventListener("click", e =>{
	if (e.target.classList.contains("tabs__item")) {
		let i = tabs.indexOf(e.target);
		tabs.map(tab => tab.classList.remove("active"));
		tabs[i].classList.add("active");
		panels.map(panel => panel.classList.remove("active"));
		panels[i].classList.add("active");
	}
});
})(document);
