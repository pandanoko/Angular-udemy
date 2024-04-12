import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() bluePrintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  newServerName = '';
  newServerContent = '';

  onAddServer(serverInputName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInputName.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent
    })
  }
}
