import {createServer} from 'http';
import {
expressApp, 
blogexpressApp
} from './express.js';

const httpServer = createServer(expressApp);
const httpBlogServer = createServer(blogexpressApp);
export{
    httpServer,
    httpBlogServer
};