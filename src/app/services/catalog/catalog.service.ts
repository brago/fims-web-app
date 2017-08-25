/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '../http/http.service';
import {Observable} from 'rxjs';
import {Catalog} from './domain/catalog.model';

@Injectable()
export class CatalogService{

  constructor(@Inject('customerBaseUrl') private baseUrl: string, private  http: HttpClient) {}

  fetchCatalogs(): Observable<Catalog[]>{
    return this.http.get(`${this.baseUrl}/catalogs`);
  }
}