export const apiV1Paths = {
  basePath: 'api/v1',
  auth: {
    basePath: 'auth',
    signUp: 'sign-up',
    login: 'login',
    user: 'user',
    refresh: 'refresh',
    logout: 'logout',
    forgotPassword: 'forgot-password',
    resetPassword: 'reset-password',
  },
  users: {
    basePath: 'users',
  },
  health: {
    basePath: 'health',
  },
} as const;

const { basePath, auth } = apiV1Paths;

export const apiV1FullPaths = {
  signUp: `${basePath}/${auth.basePath}/${auth.signUp}`,
  login: `${basePath}/${auth.basePath}/${auth.login}`,
  user: `${basePath}/${auth.basePath}/${auth.user}`,
  refresh: `${basePath}/${auth.basePath}/${auth.refresh}`,
  logout: `${basePath}/${auth.basePath}/${auth.logout}`,
  forgotPassword: `${basePath}/${auth.basePath}/${auth.forgotPassword}`,
  resetPassword: `${basePath}/${auth.basePath}/${auth.resetPassword}`,
} as const;
