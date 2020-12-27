import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[ ] = [
    new Recipe('Egg', 'Eggs recipe','https://bit.ly/3mRWuWW'),
    new Recipe('Beef wellington', 'Eggs recipe','https://bit.ly/2MadsmO')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
