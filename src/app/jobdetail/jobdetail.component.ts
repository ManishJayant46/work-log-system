import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GraphqlService } from '../graphql.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobdetail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobdetail.component.html',
  styleUrl: './jobdetail.component.css'
})
export class JobdetailComponent {
  jobId: string;
  subJobs: any[] = [];
  jobName: string;

  constructor(private route: ActivatedRoute, private graphqlService: GraphqlService) {
    this.jobId = this.route.snapshot.paramMap.get('id') || '';
    this.jobName= this.route.snapshot.paramMap.get('name') || '';
  }

  ngOnInit(): void {
    this.fetchSubJobs();
  }

  fetchSubJobs(): void {
    const SUB_JOBS = `
    query MyQuery ($id: ID!) {
      getSubJobs(jobId: $id) {
        id
        endTime
        name
        startTime
        status
      }
    }
    `;

    this.graphqlService.query(SUB_JOBS, { id: this.jobId })
      .subscribe({
        next: (response) => {
          if (response.errors) {
            console.error('GraphQL errors', response.errors);
          } else {
            this.subJobs = response.data.getSubJobs;
          }
        },
        error: (error) => {
          console.error('Error fetching job details', error);
        }
      });
  }
}


