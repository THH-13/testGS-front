import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeMusiqueDetailComponent } from './groupe-musique-detail.component';

describe('GroupeMusiqueDetailComponent', () => {
  let component: GroupeMusiqueDetailComponent;
  let fixture: ComponentFixture<GroupeMusiqueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupeMusiqueDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeMusiqueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
