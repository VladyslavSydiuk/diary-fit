import {inject, Injectable} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({ providedIn: 'root' })
export class SharedDialogService {
  private dialog = inject(MatDialog);
  constructor() {}

  public open<T, D = any, R = any>(
    component: ComponentType<T>,
    config?: {
      data?: D;
      width?: string;
      height?: string;
      panelClass?: string | string[];
      disableClose?: boolean;
    }
  ): MatDialogRef<T, R> {
    return this.dialog.open(component, {
      width: config?.width ?? '400px',
      height: config?.height,
      panelClass: config?.panelClass,
      disableClose: config?.disableClose,
      data: config?.data,
    });
  }
}
