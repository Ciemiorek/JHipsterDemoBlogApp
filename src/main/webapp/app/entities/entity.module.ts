import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.KatalogJhipsterBlogModule)
      },
      {
        path: 'entry',
        loadChildren: () => import('./entry/entry.module').then(m => m.KatalogJhipsterEntryModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.KatalogJhipsterTagModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class KatalogJhipsterEntityModule {}
