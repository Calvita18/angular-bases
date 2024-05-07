import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [
        CommonModule,
    ],
    template: `<p>list works!</p>`,
    styleUrl: './list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

@Input()
  public characterList: Character [] = [{
    name: 'Trunk',
    power: 10
  }]

  // onDelete = index value: number;
  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }
}
