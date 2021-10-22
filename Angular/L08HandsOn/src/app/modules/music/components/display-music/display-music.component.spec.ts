import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMusicComponent } from './display-music.component';

describe('DisplayMusicComponent', () => {
  let component: DisplayMusicComponent;
  let fixture: ComponentFixture<DisplayMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
