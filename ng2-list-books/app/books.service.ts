import {Injectable} from "angular2/core";

@Injectable()
export class BooksService{
	getBooks(): string[] {
		return [
			"Kaivalya Darshanam",
			"Edgar Cayce Primer",
			"The C Language"
		]
	}
}