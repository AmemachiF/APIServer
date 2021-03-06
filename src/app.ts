import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import AV from 'leanengine'

import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';

AV.init({
    appId: process.env.LEANCLOUD_APP_ID || '{{appid}}',
    appKey: process.env.LEANCLOUD_APP_KEY || '{{appkey}}',
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '{{masterkey}}'
});

import './cloud'

var app = express()

app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type, Content-Length, Authorization, Origin, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(AV.express())

export default app
