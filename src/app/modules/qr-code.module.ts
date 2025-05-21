import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleQrComponent } from './components/simple-qr/simple-qr.component';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeMainComponent } from './qr-code-main.component';
import { QrCodeImageComponent } from './components/qr-code-image/qr-code-image.component';

const routes: Routes = [
  {
    path: '',
    component: QrCodeMainComponent,
    children: [
      {
        path: 'qr-code-simple',
        component: SimpleQrComponent,
      },
      {
        path: 'qr-code-image',
        component: QrCodeImageComponent,
      },
      { path: '**', redirectTo: 'qr-code-simple', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'qr-code-simple', pathMatch: 'full' },
];

@NgModule({
  declarations: [SimpleQrComponent, QrCodeMainComponent, QrCodeImageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QrCodeModule {}
