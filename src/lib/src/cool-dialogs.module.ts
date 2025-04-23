import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCoolDialog } from './cool-dialog';
import { NgxCoolDialogsService } from './cool-dialogs.service';
import { NgxCoolDialogsGlobalConfig, NGX_QUICK_DIALOG_CONFIG } from './cool-dialogs.config';

@NgModule({
    imports: [CommonModule],
    declarations: [NgxCoolDialog],
    exports: [NgxCoolDialog]
})
export class NgxCoolDialogsModule {
  static forRoot(globalConfig?: NgxCoolDialogsGlobalConfig): ModuleWithProviders<NgxCoolDialogsModule> {
    return {
      ngModule: NgxCoolDialogsModule,
      providers: [
        NgxCoolDialogsService,
        {
          provide: NGX_QUICK_DIALOG_CONFIG,
          useValue: globalConfig
        }
      ]
    };
  }
}
