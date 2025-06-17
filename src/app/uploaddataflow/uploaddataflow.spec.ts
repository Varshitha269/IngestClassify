import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uploaddataflow } from './uploaddataflow';

describe('Uploaddataflow', () => {
  let component: Uploaddataflow;
  let fixture: ComponentFixture<Uploaddataflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uploaddataflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uploaddataflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
