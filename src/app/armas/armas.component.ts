import {Component} from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
    selector: 'app-armas',
    imports: [
    DragDropModule
],
    templateUrl: './armas.component.html',
    styleUrl: './armas.component.scss'
})
export class ArmasComponent {
    public armas = [
        'Planeación',
        'Dinamización',
        'Integración',
        'Sorpresa'
    ];

    public dropArmas(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.armas, event.previousIndex, event.currentIndex);
    }
}
