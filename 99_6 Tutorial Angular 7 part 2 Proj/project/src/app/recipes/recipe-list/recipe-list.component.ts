import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

// link for recipe pic from internet: https://www.maxpixel.net/static/photo/1x/Recipe-Flat-Grilling-Thigh-Chicken-Barbecue-3447092.jpg

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe Name-1', 'Test Recipe Description-1', 'https://www.maxpixel.net/static/photo/1x/Recipe-Flat-Grilling-Thigh-Chicken-Barbecue-3447092.jpg'),  
    new Recipe('Test Recipe Name-2', 'Test Recipe Description-2', '../assets/images/Misal.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
