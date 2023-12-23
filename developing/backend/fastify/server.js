
  // Import necessary modules
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { join } from 'path';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';
import fastify, { Fastify } from 'fastify';
import { AppServerModuleNgFactory } from './dist/<kito>-server/main';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

  // Enable prod mode for faster server rendering
  enableProdMode();

  // Define constants
  const PORT = process.env.PORT || 3000;
  const DIST_FOLDER = join(process.cwd(), 'dist');

  // Read the index.html as a template
  const TEMPLATE = readFileSync(join(DIST_FOLDER, '<kito>', 'index.html')).toString();

  // Create a Fastify instance
  const app = fastify();

  // Register static file server for serving static files
  app.register(fastifyStatic, {
    root: join(DIST_FOLDER, '<kito>'),
    prefix: '/public/'
  });

  // Register the fastify-angular-universal plugin
  app.register(fastifyAngularUniversal, {
    serverModule: AppServerModuleNgFactory,
    document: TEMPLATE,
    extraProviders: [
      provideModuleMap(LAZY_MODULE_MAP)
    ]
  });

  // Define a route for serving the Angular application
  app.get('/*', async (request: Request, reply: Reply) => {
    const url = request.req.url;

    await reply.renderNg(url);
  });

  // Start the Fastify server
  app.listen(PORT, (err: Error) => {
    if (err) {
      throw err;
    }

    console.log(`server listening on ${app.server.address().port}`);
  });
}
