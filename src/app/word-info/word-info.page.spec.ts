import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordInfoPage } from './word-info.page';

describe('WordInfoPage', () => {
  let component: WordInfoPage;
  let fixture: ComponentFixture<WordInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WordInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
