import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryTemplateComponent } from './directory-template.component';

describe('DirectoryTemplateComponent', () => {
  let component: DirectoryTemplateComponent;
  let fixture: ComponentFixture<DirectoryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectoryTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectoryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
