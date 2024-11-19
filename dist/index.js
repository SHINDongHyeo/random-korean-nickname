export default function newRandomNick(length = 8) {
    const characters = "가나다라마바사아자차카타파하";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
