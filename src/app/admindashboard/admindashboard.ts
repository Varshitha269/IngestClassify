import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface User {
  name: string;
  email: string;
  lastLogin: string;
}

interface File {
  name: string;
  lastUpdated: string;
  status: 'Success' | 'Failed';
}

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports:[CommonModule, RouterLink],
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']
})
export class Admindashboard{
  @ViewChild('barCanvas') barCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('radarCanvas') radarCanvas!: ElementRef<HTMLCanvasElement>;

  users: User[] = Array.from({ length: 50 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    lastLogin: new Date(Date.now() - Math.random() * 30 * 86400000).toISOString().split('T')[0]
  }));

  files: File[] = Array.from({ length: 75 }, (_, i) => ({
    name: `file_${i + 1}.pdf`,
    lastUpdated: new Date(Date.now() - Math.random() * 10 * 86400000).toISOString().split('T')[0],
    status: Math.random() > 0.2 ? 'Success' : 'Failed'
  }));

  admin = { name: 'Admin Name', email: 'admin@example.com', phone: '9876543210' };
  editing = { ...this.admin };

  constructor(public router: Router) {}

  ngOnInit() {
    setTimeout(() => this.renderCharts(), 0);
  }

  renderCharts() {
    new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Files/day',
          data: [5, 10, 7, 12, 8, 9, 20],
          backgroundColor: '#4f46e5'
        }]
      },
      options: { responsive: true }
    });

    new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{
          label: 'Users/month',
          data: [20, 35, 40, 50],
          borderColor: '#06b6d4',
          fill: false
        }]
      },
      options: { responsive: true }
    });

    new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Success', 'Failed'],
        datasets: [{
          data: [60, 15],
          backgroundColor: ['#34d399', '#f87171']
        }]
      },
      options: { responsive: true }
    });

    new Chart(this.radarCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: ['Login', 'Upload', 'Review', 'Export'],
        datasets: [{
          label: 'Activity Radar',
          data: [80, 90, 70, 85],
          backgroundColor: 'rgba(79,70,229,0.2)',
          borderColor: '#4f46e5'
        }]
      },
      options: { responsive: true }
    });
  }

  saveProfile() {
    this.admin = { ...this.editing };
    alert('Admin profile updated!');
  }
}
