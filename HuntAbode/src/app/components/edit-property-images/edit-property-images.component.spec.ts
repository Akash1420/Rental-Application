import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPropertyImagesComponent } from './edit-property-images.component';

describe('EditPropertyImagesComponent', () => {
  let component: EditPropertyImagesComponent;
  let fixture: ComponentFixture<EditPropertyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPropertyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPropertyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
