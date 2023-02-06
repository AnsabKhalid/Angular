import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: recipe;    //recipe imported from recipe.model component
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }
}
