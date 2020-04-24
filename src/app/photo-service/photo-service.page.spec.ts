import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoServicePage } from './photo-service.page';

describe('PhotoServicePage', () => {
  let component: PhotoServicePage;
  let fixture: ComponentFixture<PhotoServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
