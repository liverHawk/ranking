<script lang="ts">
import { ref, onMounted } from 'vue'

const urls = [
    'https://api.pococha.com/v1/organizer_events/01J2YA0CT5J0Q48A6YKMSCYKP3/rankings',
    'https://api.pococha.com/v1/organizer_events/01J2YA2AKT04RZWD9HMAZRRKMV/rankings',
    'https://api.pococha.com/v1/organizer_events/01J2YA2Y5K733R60D37351XSTF/rankings',
    'https://api.pococha.com/v1/organizer_events/01J2YA47N3YK7W8WDPZDSP96BF/rankings',
    'https://api.pococha.com/v1/organizer_events/01J2YA50JSP2E2TE3KDBQDZY8N/rankings',
    'https://api.pococha.com/v1/organizer_events/01J2YA5TF86X6DBWF013K13CV4/rankings'
]

interface apiJson {
    event: {
        name: String
        started_at: Date
        ended_at: Date
        description: String
        url: String
    }
    rank_tabs: Array<{
        name: String
        icon_url: String
        support_item_id: Number
        ranks: Array<{
            rank: Number
            score: number
            user: {
                id: Number
                name: String
                profile_image_url: String
                thumbnail_image_url: String
                created_at: Date
                updated_at: Date
                aggregate_level: Number
                v2_level: {}
                beginner: Boolean
                amateur: Boolean
            }
        }>
    }>
}

// rank_tabs[].ranks[].score
const sample = {
    event: {
        name: '★TEAM：Uranus.★ショートドラマ出演者オーディション',
        started_at: '2024-07-17T03:00:00Z',
        ended_at: '2024-07-31T14:59:59Z',
        description:
            '実績ある制作チームと共に、全10話のショートドラマを制作するため、社内オーディションを開催します。今回のオーディションでは、社内から才能あふれる出演者を発掘し、メインキャストとして起用します。\r\n\r\n第一線で活躍する制作チームの作品に出演できる、またとないチャンスです。自分の才能を試し、夢を叶えるためのこの機会をお見逃しなく。\r\n\r\nあなたの挑戦をお待ちしています。',
        url: 'https://ossified-barber-8de.notion.site/9777cef08300479a83b803378081e375?pvs=4'
    },
    rank_tabs: [
        {
            name: 'イベントポイント',
            icon_url: '',
            support_item_id: 0,
            ranks: [
                {
                    rank: 1,
                    score: 214335,
                    user: {
                        id: 8089121,
                        name: '佐倉ちひろ',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/49/24/0723fb25-6ffa-470c-be75-c3f41bda1d33/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/49/24/cd07cc8b-db17-4111-930c-c7c6404ad2b7/file.jpg',
                        created_at: '2023-06-20T10:38:46Z',
                        updated_at: '2024-07-17T02:49:24Z',
                        aggregate_level: 44,
                        v2_level: {
                            aggregate_level: 44,
                            aggregate_liver_level: 63,
                            aggregate_listener_level: 9,
                            liver_level: 88,
                            to_beginner_liver_level: 39,
                            listener_level: 18,
                            to_beginner_listener_level: 1,
                            gifting_level: 9
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 2,
                    score: 66838,
                    user: {
                        id: 4213678,
                        name: 'ﾄﾞﾗﾏｶﾞﾁｲﾍﾞ🎞️うおずみ🐠🎶',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/19/26/28/250446ae-e1fa-4b93-8117-b4c30767ad9d/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/19/26/28/4653c07a-62d9-41f5-8eef-9b428929b104/file.jpg',
                        created_at: '2022-04-02T15:52:02Z',
                        updated_at: '2024-07-17T10:26:29Z',
                        aggregate_level: 63,
                        v2_level: {
                            aggregate_level: 63,
                            aggregate_liver_level: 66,
                            aggregate_listener_level: 23,
                            liver_level: 96,
                            to_beginner_liver_level: 37,
                            listener_level: 25,
                            to_beginner_listener_level: 21,
                            gifting_level: 20
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 3,
                    score: 65881,
                    user: {
                        id: 9116778,
                        name: '🌻 み の ま る 🦁 🔆',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/22/51/22/e5b7c103-d5f5-4f59-9cab-dfe6178d2214/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/22/51/22/ee6c190a-4c80-43bf-ba57-fad631bc25a0/file.jpg',
                        created_at: '2023-10-10T10:55:53Z',
                        updated_at: '2024-07-17T14:59:37Z',
                        aggregate_level: 39,
                        v2_level: {
                            aggregate_level: 39,
                            aggregate_liver_level: 39,
                            aggregate_listener_level: 18,
                            liver_level: 51,
                            to_beginner_liver_level: 28,
                            listener_level: 23,
                            to_beginner_listener_level: 14,
                            gifting_level: 12
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 4,
                    score: 5178,
                    user: {
                        id: 5825778,
                        name: 'ゆりな🐣3rd17日〜🌷🍯',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/21/51/51/5371842e-ea6e-4dac-a05a-a852816902df/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/21/51/52/18e9a87f-8b1e-4594-b1c3-7c21a1faa183/file.jpg',
                        created_at: '2022-10-26T12:30:39Z',
                        updated_at: '2024-07-17T12:51:52Z',
                        aggregate_level: 25,
                        v2_level: {
                            aggregate_level: 25,
                            aggregate_liver_level: 31,
                            aggregate_listener_level: 12,
                            liver_level: 36,
                            to_beginner_liver_level: 27,
                            listener_level: 20,
                            to_beginner_listener_level: 4,
                            gifting_level: 5
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 5,
                    score: 4533,
                    user: {
                        id: 9846614,
                        name: 'ｳﾗﾇｽ💫世界のたえ🐝🌸',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/31/09/1a6135fd-6bba-4e29-b452-c17ce0bdf44e/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/31/09/700c5c43-44d8-4832-8d36-931581f8cb5a/file.jpg',
                        created_at: '2024-04-12T10:23:58Z',
                        updated_at: '2024-07-17T02:31:10Z',
                        aggregate_level: 41,
                        v2_level: {
                            aggregate_level: 41,
                            aggregate_liver_level: 30,
                            aggregate_listener_level: 16,
                            liver_level: 39,
                            to_beginner_liver_level: 22,
                            listener_level: 20,
                            to_beginner_listener_level: 13,
                            gifting_level: 19
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 6,
                    score: 3377,
                    user: {
                        id: 9640505,
                        name: '16時半~❤️‍🔥Maho🌼🧞‍♀️',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/22/48/31/4f27ca42-5f8c-4dd8-9146-187079ad80df/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/22/48/31/507a3c4b-a8b8-4341-8938-d5c249d5374a/file.jpg',
                        created_at: '2024-02-20T14:03:26Z',
                        updated_at: '2024-07-18T02:32:18Z',
                        aggregate_level: 47,
                        v2_level: {
                            aggregate_level: 47,
                            aggregate_liver_level: 36,
                            aggregate_listener_level: 21,
                            liver_level: 42,
                            to_beginner_liver_level: 30,
                            listener_level: 24,
                            to_beginner_listener_level: 19,
                            gifting_level: 20
                        },
                        beginner: false,
                        amateur: false
                    }
                },
                {
                    rank: 7,
                    score: 3319,
                    user: {
                        id: 10099460,
                        name: 'ハク🌿🍵',
                        profile_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/14/13/5a949eb8-27e2-46a9-91ca-a52788409183/file.png',
                        thumbnail_image_url:
                            'https://pococha.cdn-dena.com/2024/07/17/11/14/13/d94f6108-bf75-4538-b17c-d79b126badc9/file.jpg',
                        created_at: '2024-06-15T14:40:44Z',
                        updated_at: '2024-07-17T13:11:20Z',
                        aggregate_level: 23,
                        v2_level: {
                            aggregate_level: 23,
                            aggregate_liver_level: 22,
                            aggregate_listener_level: 17,
                            liver_level: 28,
                            to_beginner_liver_level: 17,
                            listener_level: 20,
                            to_beginner_listener_level: 15,
                            gifting_level: 5
                        },
                        beginner: false,
                        amateur: false
                    }
                }
            ]
        }
    ],
    logic_type: 'point'
}

export default {
    setup() {
        const rankData = ref({})
        const loading = ref(true)
        const team = ref([] as Array<{ name: String; score: Number }>)

        const fetchData = async (url: URL) => {
            try {
                const response = await fetch(url, { mode: 'no-cors' })
                const data = await response.json()
                rankData.value = data
            } catch (error) {
                console.error('エラーが発生しました:', error)
            } finally {
                loading.value = false
            }
        }

        const apiHandle = () => {
            const data = rankData.value as apiJson
            let score = 0
            for (const main of data.rank_tabs) {
                for (const user of main.ranks) {
                    score += user.score
                }
            }
            const name = data.event.name.split('.')[0]
            team.value.push({
                name: name,
                score: score
            })
        }

        onMounted(() => {
            const test: URL = new URL(
                'https://api.pococha.com/v1/organizer_events/01J2YA5TF86X6DBWF013K13CV4/rankings'
            )
            fetchData(test)
            apiHandle()
        })

        return {
            team,
            rankData,
            loading
        }
    }
}
</script>

<template>
    <h2>test</h2>
    <div>{{ rankData }}</div>
    <div>{{ team }}</div>
    <ol v-if="team.length">
        <li v-for="one in team" :key="team.indexOf(one)">{{ one }}</li>
    </ol>
    <main></main>
</template>
