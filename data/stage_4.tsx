const stage_4 = [
    {
        name:"question_1",
        question:"Manakah jawaban yang sesuai untuk gambar ini?",
        image:require('../assets/images/sign/turnleft.png'),
        text:"Belok Kiri",
        answer:[{image:require('../assets/images/sign/noleft.png')},{image:require('../assets/images/sign/turnleft.png')},{image:require('../assets/images/sign/nostop.png')}],
        correct:1,
    },
    {
        name:"question_1",
        question:"Manakah jawaban yang sesuai untuk gambar ini?",
        image:require('../assets/images/sign/turnright.png'),
        text:"Dilarang Belok Kanan",
        answer:[{image:require('../assets/images/sign/noright.png')},{image:require('../assets/images/sign/turnright.png')},{image:require('../assets/images/sign/noturn.png')}],
        correct:0,
    },
    {
        name:"question_1",
        question:"Manakah jawaban yang sesuai untuk gambar ini?",
        image:require('../assets/images/sign/nostop.png'),
        text:"Dilarang berhenti",
        answer:[{image:require('../assets/images/sign/noright.png')},{image:require('../assets/images/sign/stop.png')},{image:require('../assets/images/sign/nostop.png')}],
        correct:2,
    },
]

export default stage_4