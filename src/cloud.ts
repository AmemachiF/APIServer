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

AV.Cloud.define('getBilibiliRoomInfo', (request) => {
    const id = (request.params as any).id
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/room/v1/Room/room_init?id=${id}`, (res) => {
            res.on('data', (data) => {
                resolve(JSON.parse(data))
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})

AV.Cloud.define('getBilibiliRoomInfoOld', (request) => {
    const uid = (request.params as any).uid
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${uid}`, {
            headers: {
                Referer: 'https://www.bilibili.com'
            }
        }, (res) => {
            res.on('data', (data) => {
                resolve(JSON.parse(data))
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})
