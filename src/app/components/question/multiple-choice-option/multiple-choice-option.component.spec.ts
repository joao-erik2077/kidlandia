import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MultipleChoiceOptionComponent } from './multiple-choice-option.component';

describe('MultipleChoiceOptionComponent', () => {
  let component: MultipleChoiceOptionComponent;
  let fixture: ComponentFixture<MultipleChoiceOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceOptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleChoiceOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
