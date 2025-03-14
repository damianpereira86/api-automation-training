import { AxiosResponse, type AxiosRequestConfig } from "axios";
import { ApiClient } from "./ApiClient.js";
import { type SessionResponse } from "../models/responses/SessionResponse";
import { Response } from "../models/responses/Response";
import { CredentialsModel } from "../models/request/CredentialsModel.js";
import { SessionManager } from "./SessionManager.js";

export class ServiceBase {
  private api: ApiClient;
  protected url: string;
  protected defaultConfig: AxiosRequestConfig;

  constructor(endpointPath: string) {
    this.api = ApiClient.getInstance();
    this.url = this.baseUrl + endpointPath;
    this.defaultConfig = {};
  }

  get baseUrl(): string {
    return process.env["BASEURL"] ?? "";
  }

  // This is an example of how to authenticate to an API with basic auth.
  async authenticate(): Promise<AxiosRequestConfig> {
    const username = process.env["USER"];
    const password = process.env["PASSWORD"];

    if (!username || !password) {
      throw new Error("Missing username or password in environment variables.");
    }

    const config = {
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
    }

    return config;
  }

  protected async get<T>(
    url: string,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.get<T>(url, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async post<T>(
    url: string,
    data: unknown,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.post<T>(url, data, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async put<T>(
    url: string,
    data: unknown,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.put<T>(url, data, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async patch<T>(
    url: string,
    data: unknown,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.patch<T>(url, data, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async delete<T>(
    url: string,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.delete<T>(url, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async head<T>(
    url: string,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.head<T>(url, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  protected async options<T>(
    url: string,
    config: AxiosRequestConfig = this.defaultConfig,
  ): Promise<Response<T>> {
    const startTime = Date.now();
    const response = await this.api.client.options<T>(url, config);
    const endTime = Date.now();

    const customResponse: Response<T> = this.buildResponse<T>(endTime, startTime, response);
    return customResponse;
  }

  private buildResponse<T>(endTime: number, startTime: number, response: AxiosResponse<T>) {
    const responseTime = endTime - startTime;

    const customResponse: Response<T> = {
      data: response.data,
      status: response.status,
      headers: response.headers,
      responseTime: responseTime,
    };
    return customResponse;
  }
}
