import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('Another Recipe', 'Small description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAFkj4JTOfjYsXjDSObbHzppNgm2hx_A9hvz1p4jOcMgvYd1F')
  ]

  constructor() { }

  ngOnInit() {
  }

}
