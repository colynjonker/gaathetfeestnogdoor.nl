/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true
    },
    api: {
        // disables call to body parsing module while deployed
        bodyParser: false//process.env.NODE_ENV !== 'production',
    }
}

module.exports = nextConfig
