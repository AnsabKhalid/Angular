import { Component, OnInit } from '@angular/core';
import { ElectronicService } from '../electronic.service';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-electronic-edit',
  templateUrl: './electronic-edit.component.html',
  styleUrls: ['./electronic-edit.component.css']
})
export class ElectronicEditComponent implements OnInit {
  id: number;
  electronicForm: FormGroup;

  constructor(private electronicService: ElectronicService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.initForm();
          }
        );

        (<FormArray>this.electronicForm.get('ingredients')).push(
          new FormGroup({
            'name': new FormControl(null, Validators.required),
            'amount': new FormControl(null, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          })
        );
  }

  onSubmit() {
    this.electronicService.addElectronics(this.electronicForm.value);

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let electronicName = '';
    let electronicImagePath = '';
    let electronicAmount = '';
    let electronicDescription = '';
    let electronicIngredients = new FormArray([]);

    this.electronicForm = new FormGroup({
      'name': new FormControl(electronicName, Validators.required),
      'imagePath': new FormControl(electronicImagePath, Validators.required),
      'amount': new FormControl(electronicAmount, Validators.required),
      'description': new FormControl(electronicDescription, Validators.required),
      'ingredients': electronicIngredients
    });
  }

  getControl() {
    return (<FormArray>this.electronicForm.get('ingredients')).controls;
  }

}
