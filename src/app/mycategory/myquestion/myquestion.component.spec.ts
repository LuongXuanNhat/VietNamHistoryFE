import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyquestionComponent } from './myquestion.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { InjectionToken } from '@angular/core';

describe('MyquestionComponent', () => {
  let component: MyquestionComponent;
  let fixture: ComponentFixture<MyquestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), ],
      declarations: [MyquestionComponent,InjectionToken]
    });
    fixture = TestBed.createComponent(MyquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
