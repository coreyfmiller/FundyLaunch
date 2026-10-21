/** @type {import('next').NextConfig} */
const nextConfig = {
  // `typescript.ignoreBuildErrors` used to be true here, and it cost real money:
  // it hid a ReferenceError in the audit route that stopped every visitor from
  // receiving the audit results they asked for, plus a broken stream call in the
  // chat route. Nothing else typechecks this project automatically, so the deploy
  // is the only gate there is. Leave it enforcing.
  devIndicators: false,
}
export default nextConfig
