# readfile()

🌬️ A GitHub Action to read an arbitrary file and either output it or use it in another GitHub Action. 🍃

<br>

## Usage

In order to use this Action you need to create a YAML file in your repository's `".github/workflows/"` directory.

Here's an example.

<br>

`.github/workflows/read-file.yml`
```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v4
  - name: Read arbitrary file
    id: file
    uses: igorskyflyer/readfile-action@v1.0.0
    env:
      FILE_CONTENTS: ${{ steps.file.outputs.content }}
    with:
      path: ./test.txt
  - name: Output file
    run: echo "${{ steps.file.outputs.content }}"
```
