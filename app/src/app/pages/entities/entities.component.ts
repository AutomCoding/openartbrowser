import {Component, OnInit} from '@angular/core';
import {DataService} from '../../core/services/elasticsearch/data.service';
import {ActivatedRoute} from '@angular/router';
import {
  Entity, Movement, Artwork, Artist, Genre,
  Motif, Location, Material, Class, EntityType
} from 'src/app/shared/models/models';
import {FetchOptions} from '../../shared/components/fetching-list/fetching-list.component';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {
  fetchOptions = {
    initOffset: 0,
    fetchSize: 30,
    queryCount: undefined,
    entityType: undefined
  } as FetchOptions;
  query: (offset: number) => Promise<Entity[]> = undefined;
  counter: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.route.pathFromRoot[1]) {
      /** get type which shall be handled from url */
      this.route.pathFromRoot[1].url.subscribe(val => {
        /** remove last two characters instead of one from plural of pathvalue if it is classes */
        const lastPathSegment = val[0].path === "classes" ? val[0].path.slice(0, -2) : val[0].path.slice(0, -1);
        this.fetchOptions.entityType = EntityType[lastPathSegment.toUpperCase() as keyof typeof EntityType];
        /** get max number of elements */
        this.fetchOptions.queryCount = this.dataService.countEntityItems(this.fetchOptions.entityType);
      });
    }

    this.query = async (offset) => {
      switch (this.fetchOptions.entityType) {
        case EntityType.MOVEMENT:
          return await this.dataService.getEntityItems<Movement>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.ARTIST:
          return await this.dataService.getEntityItems<Artist>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.ARTWORK:
          return await this.dataService.getEntityItems<Artwork>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.GENRE:
          return await this.dataService.getEntityItems<Genre>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.LOCATION:
          return await this.dataService.getEntityItems<Location>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.MOTIF:
          return await this.dataService.getEntityItems<Motif>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.MATERIAL:
          return await this.dataService.getEntityItems<Material>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
        case EntityType.CLASS:
          return await this.dataService.getEntityItems<Class>(
            this.fetchOptions.entityType, this.fetchOptions.fetchSize, offset);
      }
    };
  }
}
