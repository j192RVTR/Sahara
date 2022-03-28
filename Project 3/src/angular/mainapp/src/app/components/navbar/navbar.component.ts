import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bookGenres: string[] = ["Religion", "Manga", "Biography", "History", "Horror", "Mystery", "Romance", "Science Fiction"];
  fictionGenres: string[] = ["Adventure", "Fantasy", "Classic", "Thriller", "Mystery", "Horror", "Romance", "Science Fiction"];
  nonfictionGenres: string[] = ["Art", "Religion", "Biography", "History", "Cookbooks", "True Crime", "Garden", "Health"];
  tvGenres: string[] = ["Adventure", "Animation", "Comedy", "Drama", "Kids", "Reality", "Western"];
  movieGenres = ["Action", "Comedy", "Documentary", "Family", "Horror", "Romance", "Thriller", "Western"];
  musicGenres = ["Pop", "Rock", "Blues", "Country", "Disco"];
  genres: any[] = [
    // {name: "Books", value: "books", subgenre: this.bookGenres}, 
    {name: "Fiction", value: "books_fiction", subgenre: this.fictionGenres}, 
    {name: "Nonfiction", value: "books_nonfiction", subgenre: this.nonfictionGenres}, 
    {name: "TV", value: "video_tv", subgenre: this.tvGenres}, 
    {name: "Movie", value: "video_movie", subgenre: this.movieGenres}, 
    {name: "Music", value: "music", subgenre: this.musicGenres}];
  


  constructor() { }

  ngOnInit(): void {
  }

}
