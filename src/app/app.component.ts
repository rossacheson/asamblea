import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    armas = [
        'Planeación',
        'Dinamización',
        'Integración',
        'Sorpresa'
    ];

    tips = [
        'Tener un programa (un plan) de lo que se hará durante la asamblea',
        'Pasar tiempo informal con los adolescentes, antes y después de la asamblea(15 a 20 mnts.).',
        'Tener siempre una dinámica, preferentemente con una enseñanza o moraleja de la cual los jóvenes puedan aprender e identificarse.',
        'Trata de encontrar siempre nuevas canciones apropiadas para jóvenes.',
        'Hacer que la gente participe.Asignar pequeñas responsabilidades(ej., música, intercesión, leer salmos, etc).',
        'Tener más cantos en el momento de alabanza, y que sean cantos apropiados.',
        'Tratar de invitar los jóvenes convertidos a dar su testimonio.',
        'Asignar a varios charlistas, y no siempre los mismos.',
        'Las charlas deben de ser “Super - activas” e “Interactivas”.',
        'Asignar a varias personas que dirijan la asamblea y no siempre el mismo.',
        'Tener siempre listo el material necesario para la asamblea(ej., Biblias, guitarra, cantoral, proyector, copias de esquemas, cualquier material didáctico, etc.).',
        'Dirigir con entusiasmo(que se note).',
        'Animar constantemente y con una voz fuerte que todos entiendan lo que estás diciendo.',
        'Háblales con el corazón.',
        'Dinámicas físicas para los de secundaria y en conjunto e intelectuales para los de prepa.',
        'No repetir siempre las mismas dinámicas. No cansarlos. No quemar las dinámicas.',
        'No regañar constantemente a los jóvenes.',
        'No dejar que la asamblea sea algo meramente “Social”.',
        'No te enojes, grites u ofendas. Jamás(aunque se lo merezcan).',
        'No ocultes tus errores. No te excuses. Diles la verdad.',
        'No te tardes mucho en nada. Dinamiza al máximo.',
        'Cambia de ambiente de vez en cuando.Ej.Ten una asamblea en medio de un parque para orar por la conversión de la ciudad.',
        'Llevar oraciones(ej., salmos) escritos para recitarlos en la asamblea.',
        'Haz que cada persona siente bienvenido y feliz estar en MJ',
        'Cuidar las transiciones',
        'Interceder por los jovenes',
        'Al inicio de la asamblea, da vision de que vamos a hacer, y por que',
        'Pedir a Dios su vision por la asamblea'
    ];

    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    dropArmas(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.armas, event.previousIndex, event.currentIndex);
    }

    dropTips(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tips, event.previousIndex, event.currentIndex);
    }

    dropBetween(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }
}
