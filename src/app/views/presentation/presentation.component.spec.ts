import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationComponent } from './presentation.component';
import { testConfiguration } from 'src/app/app.component.spec';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(testConfiguration).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a disabled button when control is not valid', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    const input = compiled.querySelector('input');

    expect(input.value.length).toBe(0);
    expect(button.disabled).toBe(true);
  });

  it('should have a disabled button when input value length is not correct', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    const input = compiled.querySelector('input');
    input.value = 'iWasSuperMarioInThePast';
    expect(button.disabled).toBe(true);
  });

  it('should have a valid control', () => {
    component.name.setValue('zelda');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('button');
    expect(component.name.valid).toBeTruthy();
    expect(button.disabled).toBe(false);
  });
});
