// Set this to the repository that publishes release assets.
const repo = 'mo7ammed3adel/downly-remote-releases'
const latest = `https://github.com/${repo}/releases/latest/download`
const assets = {
  win:'Downly-Remote-Windows.exe',
  macArm:'Downly-Remote-mac-arm64.dmg',
  macIntel:'Downly-Remote-mac-x64.dmg',
  linuxApp:'Downly-Remote-linux-x64.AppImage',
  linuxDeb:'Downly-Remote-linux-x64.deb'
}
for (const [id, name] of Object.entries(assets)) document.getElementById(id).href = `${latest}/${name}`
document.getElementById('sourceLink').href = `https://github.com/${repo}/releases`
