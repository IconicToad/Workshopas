import { Pipe, PipeTransform } from '@angular/core';
import {FolderService} from '../FoldersDisplay/folder.service'

@Pipe({name: 'TreeItemChilds'})

export class TreeItemChildsPipe implements PipeTransform {
  constructor(private folderService: FolderService) {

  }

  transform(treeItem: any): any {
    return this.folderService.getFolderPath().filter((item: any) => item.parentId === treeItem.id)
  }
}
