import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupeMusiqueComponent } from './liste-groupe-musique.component';

describe('ListeGroupeMusiqueComponent', () => {
  let component: ListeGroupeMusiqueComponent;
  let fixture: ComponentFixture<ListeGroupeMusiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGroupeMusiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGroupeMusiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
