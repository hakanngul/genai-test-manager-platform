import { jwtVerify, SignJWT } from 'jose';

export const generateToken = async (
  payload: Record<string, any>,
  secret: string,
  expiresIn: string | number,
) => {
  const secretKey = new TextEncoder().encode(secret);
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey);

  return jwt;
};

export const verifyToken = async (token: string, secret: string) => {
  try {
    const secretKey = new TextEncoder().encode(secret);
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
