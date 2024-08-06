import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GraphqlService } from '../graphql.service';

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent implements OnInit{

  data?: any;
  cardColors: string[] = ['#E6D7FF', '#bae1ff', '#d4ffea'];

  constructor(private graphqlService: GraphqlService, private router: RouterModule) {}

  ngOnInit() {

    const MONITORING_QUERY = `
    mutation MyMutation {
      getCuratedLocationData {
        activeJobCount
        activeWorkerCount
        address
        jobCount
        id
        materialAvailable
        name
        updatedAt
        workerCount
      }
    }
  `;
    this.graphqlService.mutate(MONITORING_QUERY)
      .subscribe({
        next: (response) => {
          this.data = response.data.getCuratedLocationData;
        },
        error: (error) => {
          console.error('Error fetching monitoring data', error);
        }
      });
  }

  getCardColor(index: number): string {
    return this.cardColors[index % this.cardColors.length];
  }

}
