import bcrypt from 'bcryptjs';

export const hash = async (valueToHash: string) => {
  const hashedValue = await bcrypt.hash(valueToHash, 12);

  return hashedValue;
};
