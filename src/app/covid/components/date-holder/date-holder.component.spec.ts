import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateHolderComponent } from './date-holder.component';

describe('DateHolderComponent', () => {
  let component: DateHolderComponent;
  let fixture: ComponentFixture<DateHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateHolderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
