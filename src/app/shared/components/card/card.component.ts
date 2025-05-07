import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/core/interfaces/pizza';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pizza!: Pizza;
  @Input() mode: 'admin' | 'client' = 'client';
  @Input() quantity: number = 0;

  @Output() onEdit = new EventEmitter<Pizza>();
  @Output() onDelete = new EventEmitter<Pizza>();
  @Output() onAddToCart = new EventEmitter<Pizza>();
  @Output() onRemoveFromCart = new EventEmitter<Pizza>();
}
