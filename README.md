# hossy-worlds-dev

## 資料

- [figma](https://www.figma.com/design/q18OFt7BQZ4qaIeqlLLY9t/master?node-id=0-1&p=f&t=96zxzKcZNpRREwJC-0)

## Basic認証の設定

このプロジェクトでは、Basic認証が実装されています。認証を有効にするには、以下の環境変数を設定してください：

### 1. 環境変数ファイルの作成

プロジェクトルートに `.env.local` ファイルを作成し、以下の内容を追加してください：

```bash
BASIC_AUTH_USERNAME=your_username
BASIC_AUTH_PASSWORD=your_secure_password
```

### 2. 環境変数の説明

- `BASIC_AUTH_USERNAME`: 認証用のユーザー名
- `BASIC_AUTH_PASSWORD`: 認証用のパスワード

### 3. 注意事項

- 環境変数が設定されていない場合、認証は無効になります
- 本番環境では必ず強力なパスワードを設定してください
- `.env.local` ファイルは `.gitignore` に含まれており、Gitにコミットされません
- 参考用に `.env.example` ファイルが提供されています

### 4. 認証の動作

- すべてのページ（APIルート、静的ファイル、画像ファイルを除く）で認証が要求されます
- ブラウザが認証ダイアログを表示します
- 正しい認証情報を入力すると、アプリケーションにアクセスできます
