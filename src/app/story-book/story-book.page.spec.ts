import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryBookPage } from './story-book.page';

describe('StoryBookPage', () => {
  let component: StoryBookPage;
  let fixture: ComponentFixture<StoryBookPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
