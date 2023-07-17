function solucao(carta) {
    const cards = ["Q", "J", "K", "A", "2", "3"];
    let result = "";

    if (cards.includes(carta)) {
        let card = cards.indexOf(carta); 
        result = cards[(card + 1) % cards.length];
    } else if (carta === cards[cards.length - 1]) {
        result = cards[0];
    }

    console.log(result);
}
