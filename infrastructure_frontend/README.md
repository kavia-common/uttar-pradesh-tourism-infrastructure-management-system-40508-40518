# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:3000/`. The application will automatically reload whenever you modify any of the source files.

## Environment configuration

- `src/environments/environment.ts` contains the `apiBaseUrl` for local development.
- For production builds, update `src/environments/environment.prod.ts`.

Do not hard-code secrets. Request orchestrator to populate relevant environment variables and wire them to the build if needed.

## Running unit tests

To execute unit tests with [Karma](https://karma-runner.github.io), use:

```bash
ng test
```

## Modules and routing

- Application uses a layout shell with a top navbar and collapsible sidebar.
- Routes are lazy-loaded for feature areas (Users, Projects, Tenders, Funds, Progress, Inspections, Payments, Reporting, Training).
- Auth is handled via JWT with an HttpInterceptor and guards.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
