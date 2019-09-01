import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  public selectOptions: Array<string>;
  public selectControl: FormControl = new FormControl('', [Validators.required]);
  public inputControl: FormControl = new FormControl('', [Validators.required])
  public valueSelected: boolean;
  public checkbox1Selected: boolean;
  public checkbox2Selected: boolean;
  public checkbox3Selected: boolean;
  public submissionMessage: string;
  public sampleForm: FormGroup = new FormGroup({
    selectControl: this.selectControl,
    inputControl: this.inputControl
  });

  constructor() { }

  ngOnInit() {
    this.selectOptions = ['Option 1', 'Option 2', 'Option 3'];
  }

  public onSelectionChange(): void {
    if(this.selectControl.value !== null) {
      this.valueSelected = true;
    }
  }

  public onSubmit(): void {
    this.submissionMessage = 'Form Submited!';
  }
}
