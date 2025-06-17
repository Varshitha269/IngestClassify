import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements AfterViewInit {
  team = ['Varshitha Govindaswamy', 'Sunil Ganesh Kurra'];
  techs = ['Angular', 'Node.js', 'SQL Server', 'Azure Blob', 'IMAP', 'Graph API', 'OCR', 'LLM', 'Logic Apps'];
  flow = [
    { icon: '📥', title: 'Ingest', desc: 'Upload or receive docs via email or drag & drop.' },
    { icon: '🔍', title: 'Extract', desc: 'OCR/NLP extracts key info from scanned and digital files.' },
    { icon: '🧠', title: 'Classify', desc: 'LLMs  determines document type.' },
    { icon: '📤', title: 'Route', desc: 'Routes to APIs, databases, or teams intelligently.' }
  ];
  highlights = [
    { title: 'Auto-Retry Logic', desc: 'Retry with exponential backoff for failed extractions.' },
    { title: 'Low Confidence Review', desc: 'If ML confidence is low, escalate to manual review.' },
    { title: 'Audit Logging', desc: 'Each event is logged with metadata and timestamps.' }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    this.el.nativeElement.querySelectorAll('.fade')
      .forEach((el: HTMLElement) => obs.observe(el));
  }
}
 