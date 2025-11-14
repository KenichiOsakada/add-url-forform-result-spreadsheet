# Node.js 20系を明示的に指定（claspのOAuthが正常動作する最後の安定版）
FROM node:20-slim

# 作業ディレクトリを設定
WORKDIR /app

# コンテナ起動時に使用するポートを公開（今回は不要だが標準的な設定）
EXPOSE 3000

# 開発に必要なパッケージのインストールを自動化
# npm init -y でpackage.jsonを作成し、claspやTypeScript、型定義ファイルを一括インストール
RUN npm init -y && \
    npm install -g @google/clasp && \
    npm install -g typescript tslint && \
    npm install @types/google-apps-script --save-dev