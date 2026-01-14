import { _axios } from '@/services/axios';
import { apiV1FullPaths } from '@auth/shared';
import * as z from 'zod';
export const getRefreshToken = async () => {
  const res = await _axios.get(apiV1FullPaths.refresh);
  const parsedRes = getRefreshTokenResSchema.safeParse(res.data);
  if (!parsedRes.success) {
    throw new Error(parsedRes.error.message);
  }

  return parsedRes.data;
};

const getRefreshTokenResSchema = z.object({
  accessToken: z.string(),
});
