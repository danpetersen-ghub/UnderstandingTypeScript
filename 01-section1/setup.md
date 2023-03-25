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

```JSON
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "start" : "lite-server"
  },
```

### Update

2 errors found in this set up:

1. "Cannot redeclare block-scoped variable 'number2'.ts(2451)"
Resolution:
 add a ```tsconfig.json``` to root

```JSON
{
    "compilerOptions": {
        "lib": ["es6"]
      }
}
```

2. "[ts] Cannot find name 'console'."
Resolution:
I need to add types to the directory. Install the ```@types/node```:
run ```npm install @types/node --save-dev```
