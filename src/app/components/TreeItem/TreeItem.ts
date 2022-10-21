import {Component, Input, Output, EventEmitter} from "@angular/core";
import {FolderService} from "../FoldersDisplay/folder.service"

@Component({
selector: "tree-item",
templateUrl: "./TreeItem.html",
styleUrls: ["./TreeItem.css"]
})

export class TreeItem {
 @Input() public items: any = [];
 @Output() public parent = new EventEmitter<number>()
 @Output() public parentSelect = new EventEmitter<number>()
  constructor(private folderService: FolderService){}
 public onClick(event:any, parentId: number ){
 this.parentSelect.emit(parentId);
 if(event) {
   this.folderService.parentId.next(parentId);
 }
 }

 public parentClick(id: number): void {
 console.log(id);
 }

 public holder()
}


