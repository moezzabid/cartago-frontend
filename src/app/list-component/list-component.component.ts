import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtworkService } from '../service/ArtworkService';
import { ArtworkDto } from '../interface/ArtworkDto';
import { ModalComponent } from 'angular-custom-modal';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
    artworks: ArtworkDto[] = [];
    searchTerm: string = '';
    // Définition des colonnes
    cols = [
      { field: 'id', title: 'ID' },
      { field: 'title', title: 'Title' },
      { field: 'is_boosted', title: 'Boosted' },
      { field: 'api_model', title: 'API Model' },
      { field: 'thumbnail', title: 'Thumbnail', cellTemplate: 'thumbnailTemplate' },
      { field: 'action', title: 'Action' } 
    ];

    // Propriétés pour la pagination
    currentPage: number = 1; // Page actuelle
    totalItems: number = 0; // Total des éléments
    itemsPerPage: number = 10; // Nombre d'éléments par page

    constructor(private artworkService: ArtworkService) {}

    ngOnInit() {
      this.fetchAllArtworks();
    }

    fetchAllArtworks() {
      console.log('Fetching artworks for page:', this.currentPage);
    
      this.artworkService.getAllArtworks(this.currentPage, this.itemsPerPage).subscribe((data: ArtworkDto[]) => {
        this.artworks = data;
      }, error => {
        console.error('Error fetching artworks:', error);
      });
    }

    onSearch() {
      if (this.searchTerm.length > 0) {
        this.artworkService.searchArtworks(this.searchTerm).subscribe((data: ArtworkDto[]) => {
          this.artworks = data;
        }, error => {
          console.error('Error fetching artworks:', error);
        });
      } else {
        this.fetchAllArtworks();
      }
    }

    onPageChange(newPage: number) {
      if (newPage >= 0 && newPage * this.itemsPerPage < this.totalItems) {
        this.currentPage = newPage;
        this.fetchAllArtworks();
      }
    }

    goToPage(page: number) {
      if (page < 1) {
        return; 
      }
    
      this.currentPage = page;
      this.fetchAllArtworks(); // Recharge les artworks pour la nouvelle page
    }
}