import AV from 'leanengine'
import https from 'https'

AV.Cloud.define('getBilibiliLiveInfo', (request) => {
    const uid = (request.params as any).uid
    
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/live_user/v1/Master/info?uid=${uid}`, (res) => {
            res.on('data', (data) => {
                resolve(JSON.parse(data))
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})
