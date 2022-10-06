import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
selector: "tree-item",
templateUrl: "./TreeItem.html",
styleUrls: ["./TreeItem.css"]
})

export class TreeItem {
 @Input() public items: any = [];
 @Output() public parent = new EventEmitter<number>()

 public onClick( parentId: number ){
  this.parent.emit(parentId);
 }
}


