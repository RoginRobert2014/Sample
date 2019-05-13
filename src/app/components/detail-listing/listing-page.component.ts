import { OnInit, Component } from '@angular/core';
import { DashboardDataService } from './listing-page.service';
import { DashboardData } from '../../common/models/resultdata';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})

export class ListingPageComponent implements OnInit {
  dashboardDashboardData: DashboardData;
  dashboardElement: Element[] = [];

  constructor(private _dataService: DashboardDataService) {

   }

  ngOnInit() {
    this.getSpamInformationData();
  }

  getSpamInformationData() {

    this.dashboardDashboardData =  this._dataService.GetDashboardData();
    this.dashboardDashboardData.elements = this.dashboardDashboardData.elements;
  }

  blockItem(idValue: any) {
     const indx = this.dashboardDashboardData.elements.findIndex(item => item.id === idValue);
     this.dashboardDashboardData.elements[indx].payload.message = 'BLOCKED this content';
  }

  resolveItem(idValue: any) {
     const indx = this.dashboardDashboardData.elements.findIndex(item => item.id === idValue);
     this.dashboardDashboardData.elements.splice(indx, 1);

     // Consider a put call to the web api to update the status to CLOSED and on success of response, remove the item from client side
     this.dashboardDashboardData.elements[indx].state = 'CLOSED';
  }
}
