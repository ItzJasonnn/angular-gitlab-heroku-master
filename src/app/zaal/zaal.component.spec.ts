import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ZaalComponent } from './zaal.component'

describe('ZaalComponent', () => {
  let component: ZaalComponent
  let fixture: ComponentFixture<ZaalComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZaalComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
