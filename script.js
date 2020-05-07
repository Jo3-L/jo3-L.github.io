(() => {
	const NAME = 'Joe';
	const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	function setElementText(id, value) {
		const element = document.getElementById(id);
		if (value !== element.textContent) element.textContent = value;
	}

	function updateTime() {
		const now = new Date();
		const hour24 = now.getHours();
		const hour = hour24 > 12 ? hour24 - 12 : hour24;
		const minute = String(now.getMinutes());
		const meridiem = hour24 > 12 ? 'PM' : 'AM';

		let greeting = 'Good ';
		if (hour24 >= 20) greeting += 'night';
		else if (hour24 >= 17) greeting += 'evening';
		else if (hour24 >= 13) greeting += 'afternoon';
		else greeting += 'morning';

		setElementText('time', `${hour}:${minute.padStart(2, 0)} ${meridiem}`);
		setElementText('greeting', `${greeting}, ${NAME}`);
		setElementText('date', now.toLocaleDateString('en-US', DATE_OPTIONS));
	}
	updateTime();
	setInterval(updateTime, 1000);

	function handleResize() {
		const element = document.getElementById('dock');
		let display = '';
		if (window.innerWidth < 1224 && element.style.display !== 'none') display = 'none';
		else if (window.innerWidth >= 1224 && element.style.display === 'none') display = 'block';

		if (display) element.style.display = display;
	}
	handleResize();
	window.addEventListener('resize', handleResize);

	const backgroundId = Math.ceil(Math.random() * 9);
	document.body.style.backgroundImage = `url(./assets/backgrounds/${backgroundId}.png)`;
})();