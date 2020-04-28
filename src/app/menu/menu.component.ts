import { Component, OnInit } from '@angular/core';
import { IMeal } from './meal';
import { MealService } from './meal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  errorMessage: any;

  constructor(private mealService: MealService) {
    this._findText = '';
   }


  pageTitle: string = 'Menu List';
  imageWidth: number = 120;
  imageMargin: number = 2;
  showImage: boolean = true;
  _findText: string;
  get findText(): string {
    return this._findText;
  }
  set findText(value: string) {
    this._findText = value;
    this.filteredMeals = this.findText ? this.searchMeals(this.findText) :this.meals;
  }
  filteredMeals: IMeal[];
  meals: IMeal[];

  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe({
      next: meals => {
        this.meals = meals;
        this.filteredMeals = this.meals;
      },
      error: err => this.errorMessage = err
    });
    
  }



  toggleImage(): void{
    this.showImage = !this.showImage;

  }
  searchMeals(byText: string): IMeal[] {
    byText = byText.toLocaleLowerCase();
    return this.meals.filter((meal: IMeal) =>
    meal.mealName.toLocaleLowerCase().indexOf(byText) !== -1);
  }


}
