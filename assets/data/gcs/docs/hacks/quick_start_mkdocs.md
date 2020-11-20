# mkdocsでサイトを作りたい

Pythonベースの ```mkdocs``` は、markdown記法で作成したページをレンダリングして静的htmlファイルを生成してくれます。導入からデモサイトまでがとても簡単なので、まとめておきます。

## mkdocs を導入したい
```pip``` コマンドで簡単インストールできます。
```python
pip install mkdocs
```

## mkdocs を使いたい

- リポジトリを作ります。次のコマンドでgcsというフォルダが作成され必要なファイルがその配下に展開されます。
```
mkdocs new gcs
```

- ローカルサーバを起動します。 ```mkdocs new``` コマンドで作成されたフォルダに入って ```mkdocs serve``` コマンドで起動できます。 
ブラウザで [http://127.0.0.1:8000](http://127.0.0.1:8000) または [http://localhost:8000](http://localhost:8000) にアクセスすると作成したサイト、ページが表示されます。  
ソースを修正すると、自動でサーバに反映される。
```
cd gcs
mkdocs serve
```
このコマンドで特に自分でコンテンツを作らなくても、デモ用のページで作られたローカルサーバが確認できます。

- htmlファイルを生成します。-d オプションで出力先を指定できます。
```
mkdocs build -d site-directory
# cd .\assets\data\gcs\
# mkdocs build -d C:/Users/ki401/Documents/git/github-io/catcher-stats
```




## デザインを Bootstrap 4 にしたい

とても簡単に```Bootstrap4```デザインを導入できます。
まずはライブラリをインストールします。
```
pip install mkdocs-bootstrap4
```

テーマにbootstrap4を指定します。
```gcs/mkdocs.yml``` の theme - name を次のように指定します。
```
site_name: Giants/Catcher/Score
theme:
    name: bootstrap4
```

以上。
```mkdocs serve``` で確認してみましょう。

## デザインを material にしたい

とても簡単に```material```デザインを導入できます。
まずはライブラリをインストールします。
```
pip install mkdocs-material
```

テーマにbootstrap4を指定します。
```gcs/mkdocs.yml``` の theme - name を次のように指定します。
```
site_name: Giants/Catcher/Score
theme:
    name: material
```

以上。
```mkdocs serve``` で確認してみましょう。
