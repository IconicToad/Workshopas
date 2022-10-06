import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import {FolderService} from "./folder.service"

@Component({
  selector: 'app-folder-display',
  templateUrl: './FoldersDisplay.html',
  styleUrls: ['./FoldersDisplay.css']
})
export class FoldersDisplay implements OnInit {
   @Input() public modalValue: any = [];
   @Output() public parent = new EventEmitter<number>()
  constructor(
    private folderService: FolderService
     ) {
    }
    public ngOnInit(): void {}

    public makeParent(parentId: number): void {
      this.parent.emit(parentId);
      console.log(parentId);
    }
    //todo make this parent work
    //todo reusable component kur piesia child aka pradzia infinity loop
    //todo componenta pernaudot side meniu
    //todo highlight parent in levels
}
