This is a minimal example per request to demonstrate a bug within expo-router.

To see the issue, install and start up the project:

```
npm install
npm run web
```

Then navigate to the following URL: http://localhost:8081/some_route?someParam=paramValue#view=center

Note that the bug in question interpoplates the `#view=center` URL fragment to prior to the query string.

