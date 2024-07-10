import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardDetailComponent implements OnInit {
  card: { id: string, title: string, description: string } | undefined; // Initialize as undefined

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.card = this.dataService.getCardById(id);
    });
  }
}

