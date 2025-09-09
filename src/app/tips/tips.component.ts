import { Component } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-tips',
    imports: [
        CommonModule,
        DragDropModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './tips.component.html',
    styleUrl: './tips.component.scss'
})
export class TipsComponent {
    public tips = [
        'Tener un programa (un plan) de lo que se hará durante la asamblea',
        'Pasar tiempo informal con los adolescentes, antes y después de la asamblea (15 a 20 mnts.).',
        'Tener siempre una dinámica, preferentemente con una enseñanza o moraleja de la cual los jóvenes puedan aprender e identificarse.',
        'Trata de encontrar siempre nuevas canciones apropiadas para jóvenes.',
        'Hacer que la gente participe. Asignar pequeñas responsabilidades (ej. música, intercesión, leer salmos, etc).',
        'Tratar de invitar los jóvenes convertidos a dar su testimonio.',
        'Asignar a varios charlistas, y no siempre los mismos.',
        'Las charlas deben de ser “Super - activas” e “Interactivas”.',
        'Asignar a varias personas que dirigen la asamblea y no siempre el mismo.',
        // tslint:disable-next-line:max-line-length
        'Tener siempre listo el material necesario para la asamblea (ej. Biblias, guitarra, cantoral, proyector, copias de esquemas, cualquier material didáctico, etc.).',
        'Dirigir con entusiasmo (que se note).',
        'Animar constantemente y con una voz fuerte que todos entiendan lo que estás diciendo.',
        'Háblales con el corazón.',
        'Dinámicas físicas para los de secundaria y en conjunto e intelectuales para los de prepa.',
        'No repetir siempre las mismas dinámicas. No cansarlos. No quemar las dinámicas.',
        'No regañar constantemente a los jóvenes.',
        'No dejar que la asamblea sea algo meramente “Social”.',
        'Comunicar bien con el lider de musica',
        'No te enojes, grites u ofendas. Jamás (aunque se lo merezcan).',
        'No ocultes tus errores. No te excuses. Diles la verdad.',
        'No te tardes mucho en nada. Dinamiza al máximo.',
        'Cambia de ambiente de vez en cuando. Ej.Ten una asamblea en medio de un parque para orar por la conversión de la ciudad.',
        'Llevar oraciones (ej. salmos) escritos para recitarlos en la asamblea.',
        'Haz que cada persona siente bienvenido y feliz estar en MJ',
        'Cuidar las transiciones',
        'Interceder por los jovenes',
        'Al inicio de la asamblea, da vision de que vamos a hacer, y por que',
        'Pedir a Dios su vision por la asamblea'
    ];

    public mejoresTips: string[] = [];

    public dropBetween(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            if (event.container.id !== 'mejores-container' || this.mejoresTips.length < 10) {
                transferArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
            }
        }
    }

    public addNewTip(newTipInput: any) {
        this.tips.push(newTipInput.value);
        newTipInput.value = null;
    }

    // this doesn't work because the predicate function runs in its own scope
    // public maxTenPredicate(item: CdkDrag<string>) {
    //     return this.mejoresTips.length < 10;
    // }
}
