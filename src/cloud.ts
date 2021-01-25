import AV from 'leanengine'
import https from 'https'

const headers = {
    Referer: 'https://www.bilibili.com',
    Cookie: 'LIVE_BUVID='
}

AV.Cloud.define('getBilibiliLiveInfo', (request) => {
    const uid = (request.params as any).id
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/live_user/v1/Master/info?uid=${uid}`, {
            headers
        }, (res) => {
            res.on('data', (data) => {
                console.log(data)
                if (data) {
                    resolve(JSON.parse(data))
                }
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
        https.get(`https://api.live.bilibili.com/room/v1/Room/room_init?id=${id}`, {
            headers
        }, (res) => {
            res.on('data', (data) => {
                console.log(data)
                if (data) {
                    resolve(JSON.parse(data))
                }
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})

AV.Cloud.define('getBilibiliRoomInfoOld', (request) => {
    const uid = (request.params as any).id
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/room/v1/Room/getRoomInfoOld?mid=${uid}`, {
            headers
        }, (res) => {
            res.on('data', (data) => {
                console.log(data)
                if (data) {
                    resolve(JSON.parse(data))
                }
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})

AV.Cloud.define('getBilibiliRoomPlayUrl', (request) => {
    const cid = (request.params as any).id
    const quality = (request.params as any).quality ?? 2
    return new Promise((resolve, reject) => {
        https.get(`https://api.live.bilibili.com/room/v1/Room/playUrl?cid=${cid}&quality=${quality}`, {
            headers
        }, (res) => {
            res.on('data', (data) => {
                console.log(data)
                if (data) {
                    resolve(JSON.parse(data))
                }
            })

            res.on('error', (err) => {
                reject(err)
            })
        })
    })
})
