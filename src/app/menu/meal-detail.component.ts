import { Component, OnInit } from '@angular/core';

import { IMeal } from './meal';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from './meal.service';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';

@Component({
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  pageTitle: string = 'Meal Detail';
  errorMessage = '';
  meal: IMeal | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private mealService: MealService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getMeal(id);

    

    


  }
  getMeal(id: number){
    this.mealService.getMeal(id).subscribe({
      next: meal => this.meal = meal,
      error: err => this.errorMessage = err
    });
  }


  onBack(): void {
    this.router.navigate(['/menu']);
  }

}
