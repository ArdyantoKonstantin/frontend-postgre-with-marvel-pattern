//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class PostGreMarvelBackEnd {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : window as any;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAddress(): Promise<GetAddressResponse[]> {
        let url_ = this.baseUrl + "/get-address";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAddress(_response);
        });
    }

    protected processGetAddress(response: Response): Promise<GetAddressResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as GetAddressResponse[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<GetAddressResponse[]>(null as any);
    }

    /**
     * @return Success
     */
    getUserAll(): Promise<GetUserResponse[]> {
        let url_ = this.baseUrl + "/get-user";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUserAll(_response);
        });
    }

    protected processGetUserAll(response: Response): Promise<GetUserResponse[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as GetUserResponse[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<GetUserResponse[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getUser(name: string, body: SearchUserRequest | undefined): Promise<SearchUserResponse> {
        let url_ = this.baseUrl + "/get-user/{name}";
        if (name === undefined || name === null)
            throw new Error("The parameter 'name' must be defined.");
        url_ = url_.replace("{name}", encodeURIComponent("" + name));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetUser(_response);
        });
    }

    protected processGetUser(response: Response): Promise<SearchUserResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as SearchUserResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<SearchUserResponse>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    registerUser(body: RegisterUserRequest | undefined): Promise<RegisterUserResponse> {
        let url_ = this.baseUrl + "/register-user";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processRegisterUser(_response);
        });
    }

    protected processRegisterUser(response: Response): Promise<RegisterUserResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as RegisterUserResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<RegisterUserResponse>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    updateUser(body: UpdateUserRequest | undefined): Promise<UpdateUserResponse> {
        let url_ = this.baseUrl + "/api/User/update-user";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processUpdateUser(_response);
        });
    }

    protected processUpdateUser(response: Response): Promise<UpdateUserResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as UpdateUserResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<UpdateUserResponse>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    deleteUser(body: DeleteUserRequest | undefined): Promise<DeleteUserResponse> {
        let url_ = this.baseUrl + "/api/User/delete-user";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: RequestInit = {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processDeleteUser(_response);
        });
    }

    protected processDeleteUser(response: Response): Promise<DeleteUserResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as DeleteUserResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<DeleteUserResponse>(null as any);
    }

    /**
     * @param limit (optional) 
     * @param offset (optional) 
     * @return Success
     */
    offsetPagination(limit: number | undefined, offset: number | undefined): Promise<OffsetPaginationResponse> {
        let url_ = this.baseUrl + "/api/User/offset-pagination?";
        if (limit === null)
            throw new Error("The parameter 'limit' cannot be null.");
        else if (limit !== undefined)
            url_ += "Limit=" + encodeURIComponent("" + limit) + "&";
        if (offset === null)
            throw new Error("The parameter 'offset' cannot be null.");
        else if (offset !== undefined)
            url_ += "Offset=" + encodeURIComponent("" + offset) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processOffsetPagination(_response);
        });
    }

    protected processOffsetPagination(response: Response): Promise<OffsetPaginationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as OffsetPaginationResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<OffsetPaginationResponse>(null as any);
    }

    /**
     * @param nextId (optional) 
     * @param prevId (optional) 
     * @param limit (optional) 
     * @return Success
     */
    cursorPagination(nextId: number | undefined, prevId: number | undefined, limit: number | undefined): Promise<CursorPaginationResponse> {
        let url_ = this.baseUrl + "/api/User/cursor-pagination?";
        if (nextId === null)
            throw new Error("The parameter 'nextId' cannot be null.");
        else if (nextId !== undefined)
            url_ += "NextId=" + encodeURIComponent("" + nextId) + "&";
        if (prevId === null)
            throw new Error("The parameter 'prevId' cannot be null.");
        else if (prevId !== undefined)
            url_ += "PrevId=" + encodeURIComponent("" + prevId) + "&";
        if (limit === null)
            throw new Error("The parameter 'limit' cannot be null.");
        else if (limit !== undefined)
            url_ += "Limit=" + encodeURIComponent("" + limit) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processCursorPagination(_response);
        });
    }

    protected processCursorPagination(response: Response): Promise<CursorPaginationResponse> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CursorPaginationResponse;
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CursorPaginationResponse>(null as any);
    }

    /**
     * @return Success
     */
    getWeatherForecast(): Promise<WeatherForecast[]> {
        let url_ = this.baseUrl + "/WeatherForecast";
        url_ = url_.replace(/[?&]$/, "");

        let options_: RequestInit = {
            method: "GET",
            headers: {
                "Accept": "text/plain"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetWeatherForecast(_response);
        });
    }

    protected processGetWeatherForecast(response: Response): Promise<WeatherForecast[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as WeatherForecast[];
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<WeatherForecast[]>(null as any);
    }
}

export interface CursorPaginationModel {
    id?: number;
    name?: string | undefined;
    email?: string | undefined;
}

export interface CursorPaginationResponse {
    users?: CursorPaginationModel[] | undefined;
    nextCursor?: string | undefined;
    prevCursor?: string | undefined;
}

export interface DeleteUserRequest {
    id?: number;
}

export interface DeleteUserResponse {
    success?: string | undefined;
}

export interface GetAddressResponse {
    username?: string | undefined;
    address?: string | undefined;
}

export interface GetUserOffsetPaginationModel {
    id?: number;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
}

export interface GetUserResponse {
    username?: string | undefined;
    email?: string | undefined;
}

export interface OffsetPaginationResponse {
    users?: GetUserOffsetPaginationModel[] | undefined;
    totalData?: number;
}

export interface RegisterUserRequest {
    username?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
}

export interface RegisterUserResponse {
    success?: string | undefined;
}

export interface SearchUserRequest {
    username?: string | undefined;
}

export interface SearchUserResponse {
    username?: string | undefined;
}

export interface UpdateUserRequest {
    id?: number;
    username?: string | undefined;
    password?: string | undefined;
}

export interface UpdateUserResponse {
    success?: string | undefined;
}

export interface WeatherForecast {
    date?: Date;
    temperatureC?: number;
    readonly temperatureF?: number;
    summary?: string | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}