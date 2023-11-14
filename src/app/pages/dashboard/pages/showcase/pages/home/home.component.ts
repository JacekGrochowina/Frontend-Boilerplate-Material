import { Component } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { ShowcaseTreeNode } from '../../utils/showcase-tree-node.interface';
import { SHOWCASE_TREE_DATA } from '../../utils/showcase-tree-data';
import { ShowcaseTreeFlatNode } from '../../utils/showcase-tree-flat-node.interface';
import { ShowcaseRouting } from '../../utils/showcase-routing.enum';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HeaderPageComponent } from '../../../../../../shared/components/header-page/header-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [HeaderPageComponent, MatTreeModule, MatButtonModule, RouterLink, MatIconModule]
})
export class HomeComponent {
  private _transformer = ({ displayName, link, children }: ShowcaseTreeNode, level: number): ShowcaseTreeFlatNode => {
    return {
      expandable: !!children && children.length > 0,
      link: link ?? ShowcaseRouting.home,
      displayName,
      level,
    };
  };

  protected treeControl = new FlatTreeControl<ShowcaseTreeFlatNode>(
    node => node.level,
    node => node.expandable,
  );


  private treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  protected dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = SHOWCASE_TREE_DATA;
  }

  protected hasChild = (_: number, node: ShowcaseTreeFlatNode) => node.expandable;

  protected getTreeNodeExpandableIcon(node: ShowcaseTreeFlatNode): string {
    return this.treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right';
  }
}
