// Данные, полученные от сайта fakestoreapi.com
export interface IProduct {
	category: string;
	description: string;
	id: number;
	image: string;
	price: number;
	title: string;
}

// Возможные варианты классов ширины блока
export enum widthClasses {
	"h-full" = "h-full",
	"w-1/3" = "w-1/3",
	"w-1/2" = "w-1/2",
	"w-2/3" = "w-2/3",
}