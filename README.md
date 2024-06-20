# readfile()

🌬️ A GitHub Action to read an arbitrary file and either output it or use it in another GitHub Action (*step*). 🍃

<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🤹🏼‍♂️ Usage

In order to use this Action you need to create a YAML (`.yml`) file in your repository's `.github/workflows/` directory.

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
          path: './test.txt'
      
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

`path: string`, **required**

The path of the file to read.
