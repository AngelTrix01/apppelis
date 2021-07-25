var btn = document.querySelectorAll('.btn');

function cambiar(number)
{
	for(i = 0; i < btn.length; i++)
	{
		btn[i].classList.remove("sky");
		if (number == 1) {
			btn[i].classList.add("close");
			btn[0].classList.remove("close");
			btn[0].classList.add("sky");
		}
		if (number == 2) {
			btn[i].classList.add("close");
			btn[1].classList.remove("close");
			btn[1].classList.add("sky");
		}
		if (number == 3) {
			btn[i].classList.add("close");
			btn[2].classList.remove("close");
			btn[2].classList.add("sky");
		}
		if (number == 4) {
			btn[i].classList.add("close");
			btn[3].classList.remove("close");
			btn[3].classList.add("sky");
		}

	}
}