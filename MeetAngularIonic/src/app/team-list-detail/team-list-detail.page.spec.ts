import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeamListDetailPage } from './team-list-detail.page';

describe('TeamListDetailPage', () => {
  let component: TeamListDetailPage;
  let fixture: ComponentFixture<TeamListDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamListDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamListDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
