export default (a) => {
  const scriptName = JSON.parse(process.env.npm_config_argv).original[0];

  if (scriptName === 'test:end-to-end') {
    return {
      require: ['@babel/register'],
      files: ['**/test/end-to-end/*'],
      sources: ['**/*.{js,vue}']
    }
  }

  return {
    require: ['../../config/ava-setup.js'],
    files: ['**/test/specs/*'],
    sources: ['**/*.{js,vue}']
  }
};
