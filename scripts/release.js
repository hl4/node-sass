const gh = require('ghreleases')
const path = require('path')

const auth = {
  token: 'a95b99b9a2d287704cedca7fc13dfbd0f334476f',
  user: 'hl4'
}

const repo = 'node-sass'
const org = 'hl4'

const ref = '1.2.3-test'

const vendorPath = path.resolve(__dirname, '..', 'vendor/linux-arm64-57/binding.node')
const files = [
  vendorPath
]

gh.getByTag(auth, org, repo, ref, (err, release) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(release)
  gh.uploadAssets(auth, org, repo, release.id, files, (err, res) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(res)
  })
})
