<template>
    <div class="product">
        <div class="top-title">
            {{ title }}
        </div>
        <div class="box-items">
            <div class="item" v-for="item in 4" @click="goItem(id)">
                <div class="pic">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAxAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAEAAMFBgECBwj/xABFEAABAwMBBAQMBAUCBQUBAAACAAEDBBESBRMhIjEGMkFRFCNCUmFicXKBkaGxB4KSwRUkM9HwsuE0Q1NjcydEVJOiJf/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACURAAICAQUAAwADAQEAAAAAAAABAhEDBBIhMUETIlEUMjNxYf/aAAwDAQACEQMRAD8AmKTg8lXGmkH+FcHmquy0xRHxipbSph2JRmhY5MgqOhI6kpDHrKSjof5nJHagWyDIFBzajOAKGcVErUnIsEMGawVN5QLOjOUtHkiRfA8UjJBOKZyk0zaHLBZgmLNPCwodxEJlNlTikzE07JunLME+yBpphw4UYJL1dNkTiiKcaZukkkqwBLDrK1J1jONTQUsI7ZFHIhQLM8lNkSk0hsLQ9jwIeVk+ToaV12Z0gog4jnMpOPqIGl45iUgzINOlVnZGbZJuYcwWzitXYlUKIwmwmW58YJVbca1jLgSlw6CI2UnY3ZkkecO9JbYRFV3jQyQlORAa0apIwW0SfQuyXKm8Ih6yiqjRCl4fJUtp7lgjoI/KNT5MaY6M2gLRqIqeHZmSMqafygRMLLeVC8S2Ud8j3WR9NAQcRkh6sS2ykGJBV7EAZLz82JbKH45XIJoiwBSEMnGqtHrNNThxlkXq/wB0dp2tU0swj/Ty87l80GmyKFJs3Lgk7dFlZK6bYlhyXsb0QUO3WkvJaPKkz5rXK+DaGKkeBD0okCOmHgTHUBBs+1jFLijYnQkhJ4y4EKTpGeQcEF0oIoWTcAYAnmZPxxSQmT5MssuySyycACTwZoVocDUo7JiQELiamB4WST/C25ZWbQrKLEyKjZaU8fAnQZPAJLTX41KC6h6J/HKaZkqSDs3iZOvGmoX40S6FLg5sjdQqqbT4dtUSDGO/6c7MqBrPSuTVptjRCUdNyHz5fb3N6P8AGZ6a6nLqdf4NSeM2xOIdrNGHN/i9nUn0Z0GOkhyl4p/KL7fBQam72RPU0+OMIqcuyLgpKs/J4v7f59EcEU9JxSjw+cp+Qdl1BH7LV3HY5EOQl9WXlywP1lfzX4F9FtVKqcqSUsiBsg929rfC7fNWI1Tui9CcXSGrkiy8GGFsC38ye9va2L/C3erfIvU0274vseRqVFZfqCMWcxCjwUK0hBUkjdvwKrG+AJxCpHWptwLEHGGSzKyb4L9oEkJYpWzm91IlvRD1lG05TQ1uohzLZlqzJxmVUUydmFh3W1lhxR8mGGJZda2TchEC7d+nGXSQEs5se5ZWb0FRUICRAIWNFAqaF2FwPgYqeifMFXY3UxSS5wpUw0EQP/Mpa/OVPotXMHWGJ2b47r/C91qB8aIrYBraCem/6oEPxdufzQQ7CfZzrQ9NwCSuqB8fMADD6gM7k7+13dvgzK20MWEI+dyUJQFJLRwSGOIjkx9mBg7i4v3b2fd7FP0U8coCUXk7vi25RJt5HuPRmvqqAdWohlDj/f8AugWkEKYYz2mPL/dH6oZbEhDiLze/0Ln0HSOtrazGrEoRytshG3Lmzu/P2qXIk5MpwxconRuh20/mc5Mh4cRK12tdnv6eXYrOQKpdDY5PCSIy/wCW7v287M137eT/ACVvJ16GmS+M8vVcZWR1TGOaWKD1Gp/mcQ8kUqSpzTFVg06JaLgBYk40ztU4JZo2xdAs3AiKNMTjmaIphwSMa+zYcnwGMyytWdZuqbEmUli6V11nCdNktidaYrGzhgxFySThM99ywgtBWUGJ0dT4qOidSFE2flKuXQuPLJqgigPyRUg4Rh1BEVQ9Yqp6QyKnqZB90kZ0M1ieumnjqJykIfKJIYyi1G2CMpi4EKTJ6mZAuzmAa3CNOHhIDjxXP097v9PkmyMQASBSWo1EUQCJYkReST7mbtdVmulpKfhoauESHfsiLgdrc27vhu9CyWBu2hkdQoqpeD5SCZ8ag9S06mqKkS2AlKRN1Rbe60q67agWHiyHrEO9vaz8nUfp/SGPR9SiE4PCpZxcSLaYuDXbezWtv5dnLmvP2PdtfBfHKlG4lx0msotHhIaicdqTtlz3M3Jvv80Y3SShl4aeTaF5uL/uoBhg1abaRZYkNyEha7e1uXxbcm6ilj0/GQOrnb5s/wDZVqDgq8I2oze5vklZBI8pD6xb0fpcGAcfWTWmj4QGSlKcBA02AM34OFAtBfBGP1EDK67JxyLjyJiHNO5iHlKEmnk22MSzOGoYcGJfNkOOVxCkicacfOFZ24+cqkVRUxf1Y/0kgqquqfIjJC5r9FOLL20w+ct2kHzlQINQrYuLZESkIukhB16ST8pMh+ZIxWW9zFaFKIKrt0jIz4KYkR/E5DD+mt+WwtrJp5bukoNtR9VJFuQWxlZjJEjLgHAqcGvj5ylNG1XwupxXotE8XyFalHIYERrXoGJBrE/DwkPW9KkdTki2JCpDoHTxnTbTyiIn+u5Tz8KV6WcnW1O5cSxOCwDlgWA8X29KBK5AN8FD6W1QxV5EdWQyx5N1ndmJnZ33X3PZ2b2MlR+DagGVRWlshLHh3l3s3c3Pnb5J3pmA09T4qkGScr8R9Vshs7szb3d3Zmu/aPZffAk0kVHLUhltRFsSwJmceT3Z3e9rej0KvI7x8IiT25VbGqwJw2sZjsxp+qBC7tK9/k7We9n9N72u9f1Zo/4lR/w+CqjljDiKfiaS1snZ2d777XZrW52ZnVupZyOp2hlJJtgjyEb7n2Yvyv6ExrxlFWUcgU0hRFdjyF3fe17s79tmf5MpHGTe1q66KVkUeVwM6D0jLT6wi1CmEfC8XGUOTDawN3vute++79jWvOz6n4XUjAYkIiV+Lte274b03PF4XRxRhBkW7hIbXHk7s+/fbt7d7Oop36sEu028NxLMbO4s+539l2b2Oy6SbjdBQyLdV8HRtImiCmEQRgDLttp5KgOi0HAJHxK2iw4IVyNZocpYICSYkcaArOACSc1hRICnqamXpCMcUeUG/an2B3e11b2YcFU9NaTwwhiH8ys1PHJ5ZLcdxVC5StjMkI+amxo48+qKlNiKxgKNoDagQqWPDqprwCH/AKY/pUkzCm5HEEL2+oyiNPTqbP8ApinhoIMOr/8ApM1DVZn/AC+P5ro+lafDxuP5V0Yx/AlwAFpcV/KWVJ2SR7UbuPOtOcB+ap3RyGKbJcyptTl23WVt0jVxOYRyVyzRkiKO5S5LhqlQWBEpXoBqmyrCpj6pC7j82UBXyCdNl6qZoHKnMZ4vJSMj4LY9nYZZs1oBeOH3Sc/pazqI0it8IhEvVUs0mHF8P8btQLs6S4I3pPUUVPTRR1eRT1BOwRALOZi/W3O7WZtz3d7M7N22Z6oYVMXFKI4kPEG/us+/0t6E1Xah/wCpc8VXHN44BjpT4XjcRZns1nvfJzuz3tz3NytlZANRRiWPWFn+aXmyZU2k6Q3FhxSim1bOWDqhaZrEsB5eJPhyHmLA1nuz79ztvsp/VNUppaCLi4iJm4RJ7Pdmdr27ndNaxpAy1gz+M2os4iIk7Mbdzte1+5/h7GavS4NQ0qUYshnIWIMgZ7G1nZ9zN2+las0ZxjL3onliljyST68JbRdXg8GHMv1ELdjX5u3+OmtYrqQ9YoxAiyqIjjLiZ2C7jbez25jf4Oq3p1RQ0k0Gm6nlRVJCzDtYycZCbc7sV7Ndmbc9t7+lEdIKIaevoakJC6r8Qi7C9nu1n5O9nL5smJ3Jv9E04wS9R0/QDEKYR6pclN3VY6KiNbCMoFxDZi7uXP42urDM2yBK5XZXFqSTXo+BiojXqnZQkSOB8/KUH0pf+TlHLyXSZ21wH0BdH9YjM+NXSCYcODqridPIVOGQEQqZodd1IIcQqSx83Fkr55QdNEyyp9o6PqmqDSQkQFxeaoRtX1CUxGLZ8XV4X+u9U6atqTmyOQi95Fxa3JSAOePDbEt6GUskndUgHnV8F6w1TwbLbw7XHq4Pb7qvQdJ5/DCpq7ESjKxYo1+mNF4Bt8S2uP8ATHm79y5yclTV189XLwlMblj2N3My1zSDWRI7HR1kEoZASPCQVwd+kmoafN/L1P6t6Pj/ABD1nDHaQ/8A17/unxzcGvLE7OcjZbklx0em2qSNk9SDX5WBJd85nyxKf0X6KFsdpVjxF9FY4ejkYTZY9VSsdVAACILR6vA+Begp40hTashtVyp/Fp3QakZYSiPzk/qNN4dxAhKHTSpJtoBeUp8s4v8AqNhk5Lpokvg6s5eNhEvNu/Ws17Wa/wAVVYo86YfOU1RsVXRjBjkOY5j2Yszu9/Ru+y3FK2hmRfXgJptP8HhHAvGkeRY3s7Wd2a783vZ0WUfAXFkgtR1MdMOAajKSeTjwAb3Z7t/f6IMdW1SoMhi08R4utPJizX77Xf6J047lyKxy2tUgfVdPz4gUFJEWZePkjl54iTMz27d/JS8PSOkOsLTa6QRqd7CYi7RG+RMzXd3s7sPbue7d9kzq9LspsT4S+zry8kJYZW0eknDPDhlIjpKvpD0hKCUpCgohaQRDE3Pe+9na9uzdzv2PZRWtHqFPr0tMYzR0cxsdOJXtYWZrtd9ztfezWtezrqOkTD4MMFPHHHs+vEO5r9r+m6NqYaLUIdhWwDw9XLsfldn5s/pberuMkfqzzq+Of2QJ+Gzy0h+DEPiphv8AmZud/Y1vkr5UxDKGK5dptJruj1mVPARCN8RAmIDa3e7td33tvtzXSqasjqIdrEXDyxMXEmdux2fezoI9U0UTq7TQC0JU/uqo9Ma7CHjJX4ygMOMhVF6VdGanVpv5ecY4vWSp4ZP+pzyKnZzqLUMzIcsuJHQ1eHlY+6pej/DLZGRVGqdbzR/dTEHQPTw69XUSfJvsyZHBK7aIJRfhWY68feWZDGXylc4OhujRf8iST3idSEGh6bF/S0+P81kx4ZPjigViKXSBwdVD6jTTmH8vHIReqLrpAU8YdSCEU4w+7+lkH8ResOMKdnDKro7r9Qf8vpsxfJvu6JpuhHSSXr0Qx+/I37XXan94lpf/ADJMWlggmrOSj0A6R23tSj6No/8AZJdXeUb9VJF/Hh+A7TnlDR1OBCcZfpTE8M/EOKsjatPL5w/lFlq0sRnx45F5xfsgWll7QxuL8K7QBVnkOzU9Q0MuGUuKMj2fkDHl7qJFy938rJkdKo+hxyJdIw1NwYgjdNIqHalKXiseL5t/umBy/wCpj/noTwgJ8JyFiW7h7L9u/kjWFLk6WVyB5qit1MylpIxEhGwiYs7uN7sz8rX7Ob7+1EnJBQgMGO0qZB4hHfhdruzv3/dEDidBsNPlGERJ8peb3bc+5+bu9+e/d8ELoWmlEG0qOKcr5duDO/b3k/N/Tu383J0+aEW1xZETdF/4tMMlWIw8V9kO9gG97Pbm92Z+5nd+d09qk8Upz1ZlwlM8ZF3drP7LO3zVhljklhqYqcsZcWjyLyL2d/o7IWq00Q8Bgp48oIzdy4e5ne7v3u/3UupTy0vwt0jWNNvtlTJpIppSpyxlhs5B3s92593NvQpWgqvC4RnDiHyhIcSZ+1n7HfkigpYgr6mMxxyEXHLudnvb5t9FvS0coAOZZEO4iHfu7OXbZKwQlHjwZqnGStdignID4CIS81SPhOfi6gfzxE7P9EOMJdXrJGMVPCU5ybGKO7kRbxbtvvVi4RAbVUeobEi0+SGoLHgCXge/Zd2/2WIjn2MQ1AiNTgLyiN7MVmva/Ze9nVF6Y9ONlS01B0fn2dTUi8s1Ti9442d2azPyd3Z/YzX7WUBpuqaoYbStnLbxvwGxu9272u92fvb0KeepjB/o/Fp3I63tvdWWnLzS+qi9C1AtQ02Kcyj2u8THHtbt59t2f4qQYS9b8o7vsqoyUkmhUk4tpjrSyebj7y2aWTzhTY0/qyfqt+7JFFGHXEfzFvRGDnhGHXkFONJn5RfpTMZR+RkP5XWCq4A684j7xs30XNpGhD4+stHH/t/ZCSapQh16mP6/sidPlptQ/pTx8P8A23v9WZBvj+m7WxWSUj/D4n/57/AGWF2+J2xnOoTLyIMvzf33oqE5MOOOPLzRL93ZAwSiZ48Rerwu/wBro2OYQDqkPq5E333KgWSAMOGWzxLzi5fNmWRYerll7ln/AGeyYinHrBGOXut92T7VvrfqJn+j2dYaPR08YcIZZe8TP9U+FJ58WXrHZ/rd1pSGVWeMWP6nZv3ZH/watP8A6P1/ayBySNUWBnDPgI08kceJFIPazG7c3bu5tbduJ3Z2eyN0uviqKMSx2ZFvOIi3xl2i/dZ7t8EyfRycw454Ry9W6r2t6THo+MviZNpuIgB2fdyu7ulynHs34n4SFN0zoqQBg16ir9IlErGc8TnA5vvd2lC42u773srDS1lNqEO3oamGogLqnAYmPzZ7Ll1Tqc+xlgp6mqh2nWIJW+zs7dncod5Bi8YEBR1P/wAymkaCf0O7xszF7HF7pDnHxjUpeo7W4DnliORbiLHfbuWvg8WeWOJeruXJdL6ddKNMxGrih1emHc7mLQze27bvg7P7Ve9N6b6PUSjDWlJpVSW5oq4dmzv6p3cH+D39C5SNaZYNjJ52Xvc/muWfif0sl20mjaZiWwFiqj6zMb72Bmbm7Nvfu+G++9MtcHQej09dEQlPILRUo5N4yQtzW77b3f0M689z6lBT7WGYiknzLayCF3M3d8nd3dubock21SR0I+j2kyjKe0lLKUutl6OTehufzVmpjGUOBUKncaisHDafmL6WZX3TY/EqDPGmXYXaLX0Z1cqGjlgCLLKV3/qWZtzNyt6O9Sj9IKvyI6cfO6z/AHdc51ysq6GgKWkk2ZZjkWLPue7drd7sq2esapL16ub9Ts30smwyZNip8E+XGt7Z2WTWq0//AHIiPqxi3s3u10HUa7EH9XVBj87x7N9LrkJHJL/xExF7xu61aOPzv0iscpvtsHYjpFR0o0mIyI9Q2hfE/syAqOmWl9Xx03qiDt93ZUjAfV/Um3x879K7s2kW2fpjTGGMWnye8UjNz9jOiKf8SNSoeKkpqUffyPly3M7KlX/z/ZYcc1qVHFum/F7pcUjvGVCI9zU276u6SrNPCwxCzCkm/IYEVE/hwSDS1ccckc7kxFK8bEz3bc/bvs6lpajXYgiLTJykLHjECE2PcN+W/nk193L2KmyRjsVvp8Y8XD5Pkpm6ga5ouGqanqm2ETqZIcc8h6t2YzZndn9DM/se6iKur1YzKUNQqCy3liTMPwZ9yEjCQz/qEXv/AO7pmupvHDw+Sg3tvs1wouvQ3pRV0kJQahU4x3Z9uUrM1nu9rMzWdr+m6v1N+JegU4Yy1ckhebFET/C7szfVcVKHgEvVZbwiKHe7DUeDr9Z+LmlgYx0+m18hELuOeAM9vTcn+iqmv/iVU6sGzDS4YRyuOUpG/wBhVXuOHVFYpaIZTyQynJ8GqKCZNV1KWGWQChjxF+rH/e6q0+t6rNkJ1sn5bD9mZW+KnHwaX3X6u9US3AXs/ZMxf+gTN46mQ6mIqqaSQRMXfMnfdf0rvcsEFXTbOWMZIiGxCYs7P7WfmvPwjwkux9CtX/iWiwEReOiHZye1mtf4tZ12fpNDtK1bQDqPR+ipS2lPGQ7PLAM3cBvzxZ3s1/Qud65Fhqs3rOxfNmf73XY9WDOElyTpII/xTj6xA33dkrFJ7+fwPPFKPALpcg+GD/qXRdKfOFUSg0XVJsfBNNrJOJuIYCdvnZXLQSIPFSiQlGTiYlzZ2ezs/pZ9yzNG+QcEvDHSQP8A+VP7t/k7P+ypTEuj1OnlqxjpsRDGVSWzEi3s12fe9vYiab8JYA/47WSL/wAUDD9Xd/stwYpSjwgdRJRlycxunwbyl12l/DTo7F/xEtVUe/Lj/pZlL0nRbozQnwaNTzf+cXl/1O6o/jTJvlicKIszxDHLzR5/3R9PoeqVH9LS6+T1hgK3ztZehoayKkDGkpIYR80I2H6NZNS6lIfmo1pH6zHmRw+DoX0il6mkyD75iP3dEVPQvVqGm29X4PGPL+o7v9G/dddl1Lz54xVc6T6lTS0BRhUxyS5NwiTI5aaKVmRyNyooUGglJHkdULFy6jukpEZrAPD2JJPxRH2UEreDFuf6LOnt1kkkLB9DouE93Cm60eMSSSQhS6CDLxI+6yjTqCA0klxq6CKA5TPIiy7hfl27/opOmwaOR4us78Rb+J7N2LCSx9mo11irKl0uW24z8Uxeh73+jOqiT8HvJJJsOhcuzIjwErH0F1EqDVBiLJ4qrht6zb2f9vikkul0zcfE1R06pkE4fyrboTLAFZXU00Y7TdMBY3e25na/Zvx+bpJJOD/WJVqv82W55hBcoqK0G6SagQx7ICq5eHnxMTs77u8md/ikkrdWltRHpP7sl9PqHi6Q0MhPwiZf6XsrFqHTPSqHJ6mqK3c0RP8Askkl6Z7YSr9N1X+i/wCEDU/ibQM9qWmnkfv3Comu/FCovanpQF+8id/2SSRvLIWoRIKq/ErW5uGOaOMfVj/uoeq6XazUdfUKj8pY/ZYSQ7makgSGora+Sz1Mhf8Akkd1OaTp1bTHLLU7PAg7Cd3SSRqKoy3ZIBVWG3duWEkkA4//2Q=="
                        alt="">
                </div>
                <div class="recommend">狗狗推荐</div>
                <div class="info">
                    水果之恋(8寸)元祖鲜奶蛋糕...skdskdkakdjkjdasjkd
                </div>
                <div class="price">
                    ￥258
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    title: String
});
const goItem = (id) => {
    router.push({ path: '/item', query: { id: id } })
}
</script>

<style lang="less" scoped>
.product {
    .top-title {
        margin: 20px auto;
        width: 169px;
        height: 32px;
        color: rgba(255, 255, 255, 1);
        background-color: rgba(153, 153, 153, 1);
        font-size: 15px;
        line-height: 32px;
        text-align: center;
        font-family: Microsoft YaHei;
        font-weight: bold;
    }

    .box-items {

        overflow: hidden;

        .item {
            float: left;
            background-color: pink;
            width: 49%;
            height: 242px;
            border-radius: 2%;
            box-sizing: border-box;
            color: rgba(80, 80, 80, 1);
            background-color: rgba(231, 231, 231, 1);
            border-radius: 16px;
            margin-top: 8px;

            &:nth-child(2n) {
                margin-left: 2%;
            }

            .pic {
                margin: 17px 10px 0 10px;


                img {

                    width: 150px;
                    height: 150px;
                    border-radius: 10px;
                }
            }

            .recommend {
                font-family: Microsoft YaHei;
                margin: 8px 5px 0 5px;
                width: 36px;
                height: 12px;
                color: rgba(255, 87, 51, 1);
                border-radius: 16px;
                font-size: 8px;
                line-height: 12px;
                border: rgba(255, 87, 51, 1) solid 1px;
                text-align: center;

            }

            .info {
                width: 147px;
                height: 15px;
                margin: 10px;
                color: rgba(80, 80, 80, 1);
                font-size: 10px;
                line-height: 15px;
                font-family: Microsoft YaHei;
                overflow: hidden; //超出的文本隐藏
                text-overflow: ellipsis; //溢出用省略号显示
                white-space: nowrap;
            }

            .price {
                width: 34px;
                height: 18px;
                color: rgba(255, 87, 51, 1);
                font-size: 12px;
                line-height: 18px;
                font-family: Microsoft YaHei;
                margin-left: 10px;
            }

        }
    }

}
</style>