export const addDays = (date, days) => {
	if (!(date instanceof Date))
		throw new Error("First parameter of addDays() fn should be a date!");
	if (!Number.isInteger(days))
		throw new Error("Second parameter of addDays() fn should be a number!");
	date.setDate(date.getDate() + days);
	return date;
};
export const addWorkingDays = (date, days) => {
	if (!(date instanceof Date))
		throw new Error("First parameter of addDays() fn should be a date!");
	if (!Number.isInteger(days))
		throw new Error("Second parameter of addDays() fn should be a number!");
	for (let i = 0; i < days; i++) {
		addDays(date, 1);
		if (date.getDay() === 6) {
			addDays(date, 2);
		} else if (date.getDay() === 0) {
			addDays(date, 1);
		}
	}
	return date;
};