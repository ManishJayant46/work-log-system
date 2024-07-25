import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CardDetailComponent implements OnInit {
  
  data?: Array<{}>;
  cardId: string | null = null;

  constructor(private graphqlService: GraphqlService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.cardId = this.router.snapshot.paramMap.get('id');

    const JOBS_QUERY = `
      query MyQuery{
        getJobsByLocationId(id: ${this.cardId}) {
          id
          name
          materialConsumed
          status
          subJobs {
            name
            status
          }
          workers {
            name
            status
          }
        }
      }
    `;

    this.graphqlService.query(JOBS_QUERY)
      .subscribe({
        next: (response) => {
          this.data = response.data.getJobsByLocationId;
        },
        error: (error) => {
          console.error('Error fetching jobs data', error);
        }
      });
  }
}

