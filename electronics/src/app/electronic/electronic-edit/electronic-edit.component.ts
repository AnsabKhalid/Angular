import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ElectronicService } from '../electronic.service';

@Component({
  selector: 'app-electronic-edit',
  templateUrl: './electronic-edit.component.html',
  styleUrls: ['./electronic-edit.component.css']
})
export class ElectronicEditComponent implements OnInit {
  id: number;
  editMode = false;
  electronicForm: FormGroup;

  constructor(private electronicService: ElectronicService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
          }
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
    let electronicPrice = '';
    let electronicDescription = '';

    this.electronicForm = new FormGroup({
      'name': new FormControl(electronicName, Validators.required),
      'imagePath': new FormControl(electronicImagePath, Validators.required),
      'price': new FormControl(electronicPrice, Validators.required),
      'description': new FormControl(electronicDescription, Validators.required)
    });
  }

}
