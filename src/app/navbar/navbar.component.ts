import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bookGenres: string[] = ["Religion", "Manga", "Biography", "History", "Horror", "Mystery", "Romance", "Sci-Fi"];
  fictionGenres: string[] = ["Adventure", "Fantasy", "Classic", "Thrillers", "Mystery", "Horror"];
  nonfictionGenres: string[] = ["Art", "Cookbooks", "True Crime", "Garden", "Health"];
  tvGenres: string[] = ["USA", "British", "Korean", "French"];
  movieGenres = ["Popular", "Kids", "Family", "Hard"];
  musicGenres = ["Pop", "Rock", "Blue"];
  genres: any[] = [
    {name: "Books", subgenre: this.bookGenres}, 
    {name: "Fiction", subgenre: this.fictionGenres}, 
    {name: "Nonfiction", subgenre: this.nonfictionGenres}, 
    {name: "TV", subgenre: this.tvGenres}, 
    {name: "Movies", subgenre: this.movieGenres}, 
    {name: "Music", subgenre: this.musicGenres}];
  


  constructor() { }

  ngOnInit(): void {
  }

}
