import { Component, OnInit } from '@angular/core';
import { CafeManagementService } from '../service/cafe-management-service';
import { Food } from '../Model/food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  foodList: Food[];
  newFood: Food = { item_id: null, fname: '', img: '', price: null };

  constructor(private cafeManagementService: CafeManagementService) {}

  ngOnInit(): void {
    this.loadFoodList();
  }

  loadFoodList(): void {
    this.cafeManagementService.getAllMenu().subscribe((foods) => {
      this.foodList = foods;
    });
  }

  addFood(): void {
    this.cafeManagementService.SaveMenu(this.newFood).subscribe(() => {
      this.loadFoodList();
      // Optionally, clear the form after adding a new food
      this.newFood = { item_id: null, fname: '', price: null ,img:''};
    });
  }

  updateFood(food: Food): void {
    this.cafeManagementService.updateFood(food).subscribe(() => {
      this.loadFoodList();
    });
  }

  deleteFood(id: number): void {
    this.cafeManagementService.deleteMenu(id).subscribe(() => {
      this.loadFoodList();
    });
  }
}
