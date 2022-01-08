import {Component, OnInit} from 'angular2/core';
import {BooksService} from './books.service';

@Component({
	selector: 'books',
	template: `
		{{ title }}
		<ul>
			<li *ngFor = "#book of books">
			{{ book }}
			</li>
		</ul>
	`,
	providers: [BooksService]
})

export class BooksComponent implements OnInit {
	title = "Good Reads";
	books;

	constructor(private booksService: BooksService){
		// doing data heavy operations in contructor is bad
        // moved below code to OnInit component lifecycle method
		//this.books = booksService.getBooks();
	}

    ngOnInit(): any {
        this.books = this.booksService.getBooks();
    }
}