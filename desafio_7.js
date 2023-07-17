function solucao(texto) {
    let clear = texto.replace(/[^\w\s]/g, '')
    let words = clear.trim().split(/\s+/);
    let filtered = words.filter((word) => word.length > 0);
    let result = filtered.length;

    console.log(result);
}