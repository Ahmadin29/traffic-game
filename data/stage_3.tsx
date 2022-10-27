const stage_3 = [
    {
        name:"question_1",
        question:"Manakah jawaban yang sesuai untuk gambar ini?",
        image:require('../assets/images/sign/turnleft.png'),
        answer:[{image:require('../assets/images/sign/noleft.png')},{image:require('../assets/images/sign/turnleft.png')},{image:require('../assets/images/sign/nostop.png')}],
        correct:1,
    },
    {
        name:"question_1",
        question:"Rambu apakah yang ada di depan kamu?",
        image:require('../assets/images/sign/turnright.png'),
        answer:[{image:require('../assets/images/sign/noright.png')},{image:require('../assets/images/sign/turnright.png')},{image:require('../assets/images/sign/noturn.png')}],
        correct:1,
    },
    {
        name:"question_1",
        question:"Rambu apakah yang ada di depan kamu?",
        image:require('../assets/images/sign/stop.png'),
        answer:[{image:require('../assets/images/sign/noright.png')},{image:require('../assets/images/sign/nostop.png')},{image:require('../assets/images/sign/stop.png')}],
        correct:2,
    },
]

export default stage_3