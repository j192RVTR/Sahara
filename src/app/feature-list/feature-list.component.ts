import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {

  products = [
    {title: "", imageUrl: "", creator: ""},
    {title: "", imageUrl: "", creator: ""},
    {title: "", imageUrl: "", creator: ""},
    {title: "", imageUrl: "", creator: ""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
