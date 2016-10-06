/**
 * Created by novliza86 on 10/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import {ActivityInterface} from "./activity.interface";
@Injectable()

export class HttpService {
/*  private doctorsUrl = "http://beta.randomapi.com/api/c7fd9429af7f9879b873e89b02d93c1d";*/
 /* private  doctorsUrl = "http://localhost:53560/api/doctor"*/
  private  doctorsUrl = "app/mock/doctors.json"
  private  activitiesUrl = "http://localhost:53560/api/Activity"
  constructor(private http:Http) {}

  /**get data from server
   *
   * @returns {Observable<R>}
   */
  getDataFromServer() {
    return this.http.get(this.doctorsUrl)
      .map(res => res.json());
  }

  postDatatoServer() {
    //todo: write post function
  }

  //get activities list from server
  getActivitiesFromServer() {
  return this.http.get(this.activitiesUrl)
    .map(res => res.json());
  }


}
