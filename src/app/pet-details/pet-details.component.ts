import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pet, pets } from '../pets';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: Pet | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const petNameFromRoute = routeParam.get('petName');

    this.pet = pets.find((pet) => pet.name === petNameFromRoute);
  }

}
