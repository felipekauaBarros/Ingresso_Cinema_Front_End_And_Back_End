/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IngressoDto } from '../models/ingresso-dto';

@Injectable({
  providedIn: 'root',
})
export class IngressoControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation obterPorId
   */
  static readonly ObterPorIdPath = '/api/v1/ingresso/{id}';

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obterPorId()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.ObterPorIdPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Obter os dados completos de uma entidiade pelo id informado!
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obterPorId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obterPorId(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.obterPorId$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation alterar
   */
  static readonly AlterarPath = '/api/v1/ingresso/{id}';

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `alterar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar$Response(params: {
    id: number;
    body: IngressoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AlterarPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para altlerar os dados de uma entidiade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `alterar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  alterar(params: {
    id: number;
    body: IngressoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.alterar$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation remover
   */
  static readonly RemoverPath = '/api/v1/ingresso/{id}';

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `remover()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.RemoverPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para remover uma entidiade pela id informado
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `remover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  remover(params: {
    id: number;
  },
  context?: HttpContext

): Observable<any> {

    return this.remover$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation listAll
   */
  static readonly ListAllPath = '/api/v1/ingresso';

  /**
   * Listagem Geral
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.ListAllPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Listagem Geral
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listAll(params?: {
  },
  context?: HttpContext

): Observable<any> {

    return this.listAll$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation incluir
   */
  static readonly IncluirPath = '/api/v1/ingresso';

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incluir()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir$Response(params: {
    body: IngressoDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<any>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.IncluirPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<any>;
      })
    );
  }

  /**
   * Método utilizado para realizar a inclusão de um entidade
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incluir$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  incluir(params: {
    body: IngressoDto
  },
  context?: HttpContext

): Observable<any> {

    return this.incluir$Response(params,context).pipe(
      map((r: StrictHttpResponse<any>) => r.body as any)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso
   */
  static readonly AtualizarQuantidadeIngressoPath = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngressoPath, 'get');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso3
   */
  static readonly AtualizarQuantidadeIngresso3Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso3()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso3$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso3Path, 'put');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso3(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso3$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso2
   */
  static readonly AtualizarQuantidadeIngresso2Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso2()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso2$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso2Path, 'post');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso2(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso2$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso5
   */
  static readonly AtualizarQuantidadeIngresso5Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso5()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso5$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso5Path, 'delete');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso5(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso5$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso6
   */
  static readonly AtualizarQuantidadeIngresso6Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso6()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso6$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso6Path, 'options');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso6(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso6$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso1
   */
  static readonly AtualizarQuantidadeIngresso1Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso1()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso1$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso1Path, 'head');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso1(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso1$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

  /**
   * Path part for operation atualizarQuantidadeIngresso4
   */
  static readonly AtualizarQuantidadeIngresso4Path = '/api/v1/ingresso/api/v1/comprar';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `atualizarQuantidadeIngresso4()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso4$Response(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<IngressoDto>> {

    const rb = new RequestBuilder(this.rootUrl, IngressoControllerService.AtualizarQuantidadeIngresso4Path, 'patch');
    if (params) {
      rb.query('ingressoId', params.ingressoId, {});
      rb.query('novaQuantidadeIngresso', params.novaQuantidadeIngresso, {});
      rb.query('novaQuantidadeCompra', params.novaQuantidadeCompra, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<IngressoDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `atualizarQuantidadeIngresso4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  atualizarQuantidadeIngresso4(params: {
    ingressoId: number;
    novaQuantidadeIngresso: number;
    novaQuantidadeCompra: number;
  },
  context?: HttpContext

): Observable<IngressoDto> {

    return this.atualizarQuantidadeIngresso4$Response(params,context).pipe(
      map((r: StrictHttpResponse<IngressoDto>) => r.body as IngressoDto)
    );
  }

}
