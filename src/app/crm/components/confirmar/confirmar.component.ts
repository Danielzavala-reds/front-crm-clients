import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Cliente } from '../../interfaces/interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent {

  cliente!: Cliente

  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cliente){}


    borrar(){
      this.dialogRef.close(true);
    }
  
    cancelar(){
      this.dialogRef.close();
    }

}
