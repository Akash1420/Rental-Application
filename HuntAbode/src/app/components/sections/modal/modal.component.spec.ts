import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalComponent } from './modal.component';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
//import {ModalComponent} from 'src/app/components/sections/modal/modal.component';

describe('ModalComponent', () => {
  let component: NgbdModalComponent;
  let fixture: ComponentFixture<NgbdModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
