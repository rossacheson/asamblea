import {Component} from '@angular/core';
import {ArmasComponent} from './armas/armas.component';
import {TipsComponent} from './tips/tips.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        ArmasComponent,
        TipsComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
