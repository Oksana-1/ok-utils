export const addDays = (date, days) => {
	if (!(date instanceof Date))
		throw new Error("First parameter of addDays() fn should be a date!");
	if (!Number.isInteger(days))
		throw new Error("Second parameter of addDays() fn should be a number!");
	date.setDate(date.getDate() + days);
	return date;
};