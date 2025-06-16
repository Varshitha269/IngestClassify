import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  imports:[CommonModule],
  templateUrl: './upload.html',
  styleUrls: ['./upload.css']
})
export class UploadComponent {
  uploadedFiles: File[] = [];
  uploadProgress = 0;

  flowSteps = [
    { icon: 'upload', label: 'Ingest Document' },
    { icon: 'filter_alt', label: 'Extract Content' },
    { icon: 'category', label: 'Classify Type' },
    { icon: 'sync_alt', label: 'Route to Destination' },
    { icon: 'cloud_done', label: 'Save to Storage' },
    { icon: 'download', label: 'Ready to Download' }
  ];

  constructor(private router: Router) {}

  navigateToLanding(): void {
    this.router.navigate(['/']);
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) this.handleFiles(files);
  }

  onFileChange(event: any): void {
    const files = event.target.files;
    if (files) this.handleFiles(files);
  }

  handleFiles(fileList: FileList): void {
    this.uploadedFiles = Array.from(fileList);
    this.simulateUploadProgress();
  }

  simulateUploadProgress(): void {
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
      } else {
        this.uploadProgress += 10;
      }
    }, 200);
  }

  connectToMailbox(): void {
    alert('Connect to Mailbox feature coming soon!');
  }

  submitFiles(): void {
    alert('Files submitted! You can now hook this to your backend.');
  }
}
 