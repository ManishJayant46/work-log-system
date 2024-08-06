import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GraphqlService } from '../graphql.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
  standalone: true,
  imports: [CommonModule,RouterModule],
})
export class CardDetailComponent implements OnInit {
  
  data: any[] = [];
  cardId: string | null = null;
  cardColors: string[] = ['#d4ffea', '#E6D7FF', '#bae1ff'];

  constructor(private graphqlService: GraphqlService, private router: ActivatedRoute) {
    this.cardId = this.router.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    
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
          this.calculateMetrics();
        },
        error: (error) => {
          console.error('Error fetching jobs data', error);
        }
      });
  }

  calculateMetrics(): void {
    this.data.forEach(location => {
      location.activeJobCount = location.subJobs.filter((job: { status: any; }) => job.status).length;
      location.totalJobCount = location.subJobs.length;
      location.activeWorkerCount = location.workers.filter((worker: { status: string; }) => worker.status === 'WORKING').length;
      location.totalWorkerCount = location.workers.length;
    });
  }

  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }
}

