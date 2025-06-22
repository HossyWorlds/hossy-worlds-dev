import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Basic認証のヘッダーを取得
  const authHeader = request.headers.get('authorization');

  // 環境変数から認証情報を取得
  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  // 認証情報が設定されていない場合は認証をスキップ
  if (!username || !password) {
    return NextResponse.next();
  }

  // Basic認証のヘッダーが存在しない場合
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // Basic認証のヘッダーから認証情報をデコード
  const encodedCredentials = authHeader.split(' ')[1];
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');
  const [providedUsername, providedPassword] = decodedCredentials.split(':');

  // 認証情報を検証
  if (providedUsername === username && providedPassword === password) {
    return NextResponse.next();
  }

  // 認証失敗
  return new NextResponse('Authentication failed', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 
