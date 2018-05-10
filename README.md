# riff Sample: Node Square

A sample function that multiplies a number by itself, returning the squared value.

## Deployment

1. Setup a running riff install (tested with riff 0.0.6)

   See riff's [Getting Started](https://github.com/projectriff/riff/blob/master/Getting-Started.adoc) guide. Skip if you already have riff running.

2. Install the node invoker

   ```bash
    riff invokers apply -f https://github.com/projectriff/node-function-invoker/raw/v0.0.8/node-invoker.yaml
   ```

3. Clone this repo

   ```bash
   git clone https://github.com/projectriff-samples/node-square.git
   cd node-square
   ```

4. create the function definition

    Since there are multiple files in the directory, we need to tell `riff` which file to use as the entry point.

   ```bash
   riff create node -a package.json
   ```

4. Invoke the function

   ```bash
   riff publish -d 3 -r
   ```

   Will result in:

   ```txt
   Posting to http://127.0.0.1:31768/requests/node-square
   9
   ```

   Change the number 3 to another number to see its square.
