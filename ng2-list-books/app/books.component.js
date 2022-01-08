System.register(['angular2/core', './books.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, books_service_1;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            }],
        execute: function() {
            BooksComponent = (function () {
                function BooksComponent(booksService) {
                    this.booksService = booksService;
                    this.title = "Good Reads";
                    // doing data heavy operations in contructor is bad
                    // moved below code to OnInit component lifecycle method
                    //this.books = booksService.getBooks();
                }
                BooksComponent.prototype.ngOnInit = function () {
                    this.books = this.booksService.getBooks();
                };
                BooksComponent = __decorate([
                    core_1.Component({
                        selector: 'books',
                        template: "\n\t\t{{ title }}\n\t\t<ul>\n\t\t\t<li *ngFor = \"#book of books\">\n\t\t\t{{ book }}\n\t\t\t</li>\n\t\t</ul>\n\t",
                        providers: [books_service_1.BooksService]
                    }), 
                    __metadata('design:paramtypes', [books_service_1.BooksService])
                ], BooksComponent);
                return BooksComponent;
            }());
            exports_1("BooksComponent", BooksComponent);
        }
    }
});
//# sourceMappingURL=books.component.js.map