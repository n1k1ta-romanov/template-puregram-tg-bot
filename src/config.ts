import 'dotenv/config';
import * as v from 'valibot';

const configSchema = v.object({
  NODE_ENV: v.picklist(['development', 'production']),
  BOT_TOKEN: v.string(),
  ADMINS: v.array(v.number()),
  DEV: v.number(),
});

const parseConfig = () => {
  const env = {
    ...process.env,
    ...{
      ADMINS: JSON.parse(process.env.ADMINS!),
      DEV: JSON.parse(process.env.DEV!),
    },
  };

  const config = v.parse(configSchema, env);

  return {
    ...config,
    isDev: process.env.NODE_ENV === 'development',
    isProd: process.env.NODE_ENV === 'production',
  };
};

export type TConfig = ReturnType<typeof parseConfig>;

export const config = parseConfig();
