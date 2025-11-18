# 概要

# 初期構築
1. Docker 実行
PJルートでコマンド実行
     ``` bash
     docker build -t clasp-node20 .
     docker run -it -v "$PWD":/app --name add-url-forform-result-spreadsheet clasp-node20 bash
     ```
2. VsCodeでコマンド実行
     1. Ctr + Shift + P でVsCodeのコマンド起動
     2. `Open Folder in Container...` を実行
     3. 作成したPjディレクトリを選択
3. Googleにログイン
     1. ログインコマンド実行
          ``` bash
          clasp login --no-localhost
          ```
     1. ブラウザを起動し、開発モード(F12)でNetworkタブをActiveにしておく
     Netワーク追跡を有効にするため
     1. 画面の指示に従い許可を行う
     1. 画面遷移が止まるが、通信履歴の中に`http://localhost`と通信している箇所が出てくるのでURLパラメータから`code=`の値を取得
     1.  ログインコマンドが待機状態になっているので、`After authorizing, copy the URL from your browser and paste it here: `に対して`http://localhost:8888/?code=<前のURLパラメータから取得した値>`と入力する
     1. ログイン成功
4. claspプロジェクト作成
clasp create --title "Add Edit Url For SpreadSheet"
# コンテナ操作
## コンテナ停止
普通のコンテナ停止と同じ
     ``` bash
          docker stop add-url-forform-result-spreadsheet
     ```
## コンテナ起動
普通のコンテナ起動と同じ
     ``` bash
          docker start add-url-forform-result-spreadsheet
     ```
