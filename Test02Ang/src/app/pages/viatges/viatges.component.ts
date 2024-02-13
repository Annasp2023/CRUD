import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';
import { ViatgesService } from '../../model/services/viatges.service';
import { IViatge } from '../../model/models/viatge';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-viatges',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './viatges.component.html',
  styleUrl: './viatges.component.scss',
})
export class ViatgesComponent implements OnInit {
  viatges: IViatge[] = [];
  viatgeForm!: FormGroup;
  viatgesSelected: IViatge = {} as IViatge;
  showIdText = false;
  showOrigenText = false;
  showDestinacioText = false;
  showPreuText = false;
  showPaisText = false;
  showDescripcioText = false;

  constructor(
    private viatgesService: ViatgesService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.viatges = this.viatgesService.getViatges();
    this.initForm();
  }

  initForm() {
    this.viatgeForm = this.formBuilder.group({
      id: [{ value: '', disabled: false }, [Validators.required]],
      origen: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(4)],
      ],
      destinacio: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(4)],
      ],
      preu: [
        { value: '', disabled: false },
        [Validators.required, this.preuNoCero],
      ],
      pais: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(4)],
      ],
      descripcio: [
        { value: '', disabled: false },
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  guardarViatge() {
    if (this.viatgeForm.valid) {
      this.viatgesService.setViatges(this.viatgeForm.value as IViatge);
      this.viatgesService.getViatges();
    }
    console.log(this.viatgeForm);
  }

  preuNoCero(control: { value: any }) {
    const preu = control.value;
    if (preu === 0 || preu === 0.0 || preu === '0' || preu === '0.0') {
      return { preuInvalid: true };
    }
    return null;
  }

  showViatge($index: number) {
    this.viatgesSelected = this.viatgesService.getViatgeById($index);
    this.showIdText = true;
    this.showOrigenText = true;
    this.showDestinacioText = true;
    this.showPreuText = true;
    this.showPaisText = true;
    this.showDescripcioText = true;
  }

  closeSession() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
