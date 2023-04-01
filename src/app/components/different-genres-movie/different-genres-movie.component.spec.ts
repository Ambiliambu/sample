import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentGenresMovieComponent } from './different-genres-movie.component';

describe('DifferentGenresMovieComponent', () => {
  let component: DifferentGenresMovieComponent;
  let fixture: ComponentFixture<DifferentGenresMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentGenresMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentGenresMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
