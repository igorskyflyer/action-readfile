# readfile()

🌬️ A GitHub Action to read an arbitrary file and either output it or use it in another GitHub Action. 🍃

<br>

## 🤹🏼‍♂️ Usage

In order to use this Action you need to create a YAML file in your repository's `".github/workflows/"` directory.

Here's an example.

<br>

`.github/workflows/read-file.yml`
```yaml
name: Read file

on:
  [push]

jobs:
  read_file:
    runs-on: ubuntu-latest # windows-latest || macos-latest
    name: Read arbitrary file

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Read arbitrary file
        id: file
        uses: igorskyflyer/action-readfile@v1.0.0
        with:
          path: ./test.txt
      
      - name: Output file
        env:
          FILE_CONTENTS: ${{ steps.file.outputs.content }}
        run: |
          echo 'File contents:'
        # print the output directly
          echo "${{ steps.file.outputs.content }}"
        # or via a environment variable
          echo "$FILE_CONTENTS"
```

<br>

## ⚙️ Configuration
