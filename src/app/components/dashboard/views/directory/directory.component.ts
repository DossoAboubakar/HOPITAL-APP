import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DirectoryTemplateComponent } from './directory-template/directory-template.component';

@Component({
    selector: 'app-directory',
    standalone: true,
    templateUrl: './directory.component.html',
    styleUrl: './directory.component.css',
    imports: [RouterModule, DirectoryTemplateComponent]
})
export class DirectoryComponent {

}
