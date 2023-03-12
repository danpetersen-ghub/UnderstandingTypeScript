# Set up

- VS Code
- Extensions:
  - ES Lint
  - Material Icon
  - Path intellisense
  - Shift alt F = Format Document

Now im ready!

Create and manually compline a random file:

1. Add file ``` index.html ```
2. Add file ``` app.ts ```
3. run cli ``` tsc app.ts ```

Also add another tool to rerun the compile:
``` npm init ```
then:

``` npm install  --save-dev lite-server ```

In ``` package.json ``` add:

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "start" : "lite-server"
  },
```
