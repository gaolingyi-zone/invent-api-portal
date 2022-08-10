import {useEffect, useState} from 'react';
import {SwaggerUIBundle} from 'swagger-ui-dist';
import 'swagger-ui-dist/swagger-ui.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Nav from '../../../components/Nav';

export default function Details() {
    let params = useParams();
    console.log('useParams()', params)
    useEffect(() => {
        SwaggerUIBundle({
            // url: `https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json`,
            spec:{
                "openapi": "3.0.1",
                "info": {
                    "title": "Ant Design Pro",
                    "version": "1.0.0"
                },
                "servers": [
                    {
                        "url": "http://localhost:80002/"
                    },
                    {
                        "url": "https://localhost:80001/"
                    }
                ],
                "paths": {
                    "/api/currentUser": {
                        "get": {
                            "tags": ["api"],
                            "description": "获取当前的用户",
                            "operationId": "currentUser",
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/CurrentUser"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "x-swagger-router-controller": "api"
                    },
                    "/api/login/captcha": {
                        "post": {
                            "description": "发送验证码",
                            "operationId": "getFakeCaptcha",
                            "tags": ["login"],
                            "parameters": [
                                {
                                    "name": "phone",
                                    "in": "query",
                                    "description": "手机号",
                                    "schema": {
                                        "type": "string"
                                    }
                                }
                            ],
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/FakeCaptcha"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "/api/login/outLogin": {
                        "post": {
                            "description": "登录接口",
                            "operationId": "outLogin",
                            "tags": ["login"],
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "x-swagger-router-controller": "api"
                    },
                    "/api/login/account": {
                        "post": {
                            "tags": ["login"],
                            "description": "登录接口",
                            "operationId": "login",
                            "requestBody": {
                                "description": "登录系统",
                                "content": {
                                    "application/json": {
                                        "schema": {
                                            "$ref": "#/components/schemas/LoginParams"
                                        }
                                    }
                                },
                                "required": true
                            },
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/LoginResult"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            },
                            "x-codegen-request-body-name": "body"
                        },
                        "x-swagger-router-controller": "api"
                    },
                    "/api/notices": {
                        "summary": "getNotices",
                        "description": "NoticeIconItem",
                        "get": {
                            "tags": ["api"],
                            "operationId": "getNotices",
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/NoticeIconList"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "/api/rule": {
                        "get": {
                            "tags": ["rule"],
                            "description": "获取规则列表",
                            "operationId": "rule",
                            "parameters": [
                                {
                                    "name": "current",
                                    "in": "query",
                                    "description": "当前的页码",
                                    "schema": {
                                        "type": "number"
                                    }
                                },
                                {
                                    "name": "pageSize",
                                    "in": "query",
                                    "description": "页面的容量",
                                    "schema": {
                                        "type": "number"
                                    }
                                }
                            ],
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/RuleList"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "post": {
                            "tags": ["rule"],
                            "description": "新建规则",
                            "operationId": "addRule",
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/RuleListItem"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "put": {
                            "tags": ["rule"],
                            "description": "新建规则",
                            "operationId": "updateRule",
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/RuleListItem"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "delete": {
                            "tags": ["rule"],
                            "description": "删除规则",
                            "operationId": "removeRule",
                            "responses": {
                                "200": {
                                    "description": "Success",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "type": "object"
                                            }
                                        }
                                    }
                                },
                                "401": {
                                    "description": "Error",
                                    "content": {
                                        "application/json": {
                                            "schema": {
                                                "$ref": "#/components/schemas/ErrorResponse"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "x-swagger-router-controller": "api"
                    },
                    "/swagger": {
                        "x-swagger-pipe": "swagger_raw"
                    }
                },
                "components": {
                    "schemas": {
                        "CurrentUser": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                },
                                "userid": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "signature": {
                                    "type": "string"
                                },
                                "title": {
                                    "type": "string"
                                },
                                "group": {
                                    "type": "string"
                                },
                                "tags": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "key": {
                                                "type": "string"
                                            },
                                            "label": {
                                                "type": "string"
                                            }
                                        }
                                    }
                                },
                                "notifyCount": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "unreadCount": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "country": {
                                    "type": "string"
                                },
                                "access": {
                                    "type": "string"
                                },
                                "geographic": {
                                    "type": "object",
                                    "properties": {
                                        "province": {
                                            "type": "object",
                                            "properties": {
                                                "label": {
                                                    "type": "string"
                                                },
                                                "key": {
                                                    "type": "string"
                                                }
                                            }
                                        },
                                        "city": {
                                            "type": "object",
                                            "properties": {
                                                "label": {
                                                    "type": "string"
                                                },
                                                "key": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                },
                                "address": {
                                    "type": "string"
                                },
                                "phone": {
                                    "type": "string"
                                }
                            }
                        },
                        "LoginResult": {
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "currentAuthority": {
                                    "type": "string"
                                }
                            }
                        },
                        "PageParams": {
                            "type": "object",
                            "properties": {
                                "current": {
                                    "type": "number"
                                },
                                "pageSize": {
                                    "type": "number"
                                }
                            }
                        },
                        "RuleListItem": {
                            "type": "object",
                            "properties": {
                                "key": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "disabled": {
                                    "type": "boolean"
                                },
                                "href": {
                                    "type": "string"
                                },
                                "avatar": {
                                    "type": "string"
                                },
                                "name": {
                                    "type": "string"
                                },
                                "owner": {
                                    "type": "string"
                                },
                                "desc": {
                                    "type": "string"
                                },
                                "callNo": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "status": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "updatedAt": {
                                    "type": "string",
                                    "format": "datetime"
                                },
                                "createdAt": {
                                    "type": "string",
                                    "format": "datetime"
                                },
                                "progress": {
                                    "type": "integer",
                                    "format": "int32"
                                }
                            }
                        },
                        "RuleList": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/RuleListItem"
                                    }
                                },
                                "total": {
                                    "type": "integer",
                                    "description": "列表的内容总数",
                                    "format": "int32"
                                },
                                "success": {
                                    "type": "boolean"
                                }
                            }
                        },
                        "FakeCaptcha": {
                            "type": "object",
                            "properties": {
                                "code": {
                                    "type": "integer",
                                    "format": "int32"
                                },
                                "status": {
                                    "type": "string"
                                }
                            }
                        },
                        "LoginParams": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                },
                                "autoLogin": {
                                    "type": "boolean"
                                },
                                "type": {
                                    "type": "string"
                                }
                            }
                        },
                        "ErrorResponse": {
                            "required": ["errorCode"],
                            "type": "object",
                            "properties": {
                                "errorCode": {
                                    "type": "string",
                                    "description": "业务约定的错误码"
                                },
                                "errorMessage": {
                                    "type": "string",
                                    "description": "业务上的错误信息"
                                },
                                "success": {
                                    "type": "boolean",
                                    "description": "业务上的请求是否成功"
                                }
                            }
                        },
                        "NoticeIconList": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/NoticeIconItem"
                                    }
                                },
                                "total": {
                                    "type": "integer",
                                    "description": "列表的内容总数",
                                    "format": "int32"
                                },
                                "success": {
                                    "type": "boolean"
                                }
                            }
                        },
                        "NoticeIconItemType": {
                            "title": "NoticeIconItemType",
                            "description": "已读未读列表的枚举",
                            "type": "string",
                            "properties": {},
                            "enum": ["notification", "message", "event"]
                        },
                        "NoticeIconItem": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "extra": {
                                    "type": "string",
                                    "format": "any"
                                },
                                "key": { "type": "string" },
                                "read": {
                                    "type": "boolean"
                                },
                                "avatar": {
                                    "type": "string"
                                },
                                "title": {
                                    "type": "string"
                                },
                                "status": {
                                    "type": "string"
                                },
                                "datetime": {
                                    "type": "string",
                                    "format": "date"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "type": {
                                    "extensions": {
                                        "x-is-enum": true
                                    },
                                    "$ref": "#/components/schemas/NoticeIconItemType"
                                }
                            }
                        }
                    }
                }
            },
            dom_id: '#swagger-ui',
        });
    }, []);

    return (
        <div>
            <div id="header-wrapper" >
                <div className="5grid-layout">
                    <div className="row">
                        <div className="12u">
                            <section id="header">
                                <Nav path='/apply'/>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="5grid-layout" style={{maxWidth:1500,background:"#fff"}}>
                    <div className="row">
                        <div style={{padding: 24}}>
                            <div id="swagger-ui"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
