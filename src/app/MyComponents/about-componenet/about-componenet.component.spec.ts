import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponenetComponent } from './about-componenet.component';

describe('AboutComponenetComponent', () => {
  let component: AboutComponenetComponent;
  let fixture: ComponentFixture<AboutComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
