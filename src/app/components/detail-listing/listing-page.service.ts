import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

declare var require: any;
const dataSystem = require('../../../assets/models/update_ticket_request.json');

@Injectable()
export class DashboardDataService {

    constructor() {
    }

    /**
     * Service for getting dashboard data
     *
     */
    public GetDashboardData() {
        return dataSystem;
    }

}
