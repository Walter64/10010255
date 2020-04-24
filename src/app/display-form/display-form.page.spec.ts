import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayFormPage } from './display-form.page';

describe('DisplayFormPage', () => {
  let component: DisplayFormPage;
  let fixture: ComponentFixture<DisplayFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
