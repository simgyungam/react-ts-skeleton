import prod from './prod';
import dev from './dev';

const nodeEnv = process.env.NODE_ENV;

const config = nodeEnv === 'production' ? prod : dev;

export default config;
