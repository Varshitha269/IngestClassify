import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploaddataflow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uploaddataflow.html',
  styleUrl: './uploaddataflow.css'
})
export class Uploaddataflow {
  flowSteps = [
    {
      icon: 'upload',
      label: 'Ingest Document',
      status: 'pending',
      details: {
        fileName: 'invoice-123.pdf',
        time: '1.2s',
        size: '1.5MB',
        source: 'Drag & Drop'
      }
    },
    {
      icon: 'filter_alt',
      label: 'Extract Content',
      status: 'pending',
      details: {
        fields: 12,
        contentPreview: 'Invoice No, Date, Amount...',
        time: '0.9s'
      }
    },
    {
      icon: 'category',
      label: 'Classify Type',
      status: 'pending',
      details: {
        category: 'Invoice',
        confidence: '98%',
        time: '0.7s'
      }
    },
    {
      icon: 'sync_alt',
      label: 'Route to Destination',
      status: 'pending',
      details: {
        destination: 'Finance DB',
        protocol: 'REST API',
        time: '1.1s'
      }
    },
    {
      icon: 'download',
      label: 'Ready to Download',
      status: 'pending',
      details: {
        outputName: 'invoice-123-classified.pdf',
        format: 'PDF',
        size: '1.4MB'
      }
    }
  ];

  selectedStepIndex: number | null = null;
  animationRunning = false;

  constructor(private router: Router) {}

  startWorkflow(): void {
    if (this.animationRunning) return;
    this.animationRunning = true;

    let delay = 0;

    this.flowSteps.forEach((_, i) => {
      setTimeout(() => {
        this.flowSteps[i].status = 'in-progress';
      }, delay);

      setTimeout(() => {
        this.flowSteps[i].status = 'done';
      }, delay + 1000);

      delay += 1600;
    });

    setTimeout(() => {
      this.animationRunning = false;
    }, delay);
  }

  selectStep(i: number): void {
    this.selectedStepIndex = i;
  }

  closeDetails(): void {
    this.selectedStepIndex = null;
  }

  navigateToLanding(): void {
    this.router.navigate(['/']);
  }
}
 
