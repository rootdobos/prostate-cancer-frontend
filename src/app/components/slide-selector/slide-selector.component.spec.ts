import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSelectorComponent } from './slide-selector.component';

describe('SlideSelectorComponent', () => {
  let component: SlideSelectorComponent;
  let fixture: ComponentFixture<SlideSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
