function bangCuuChuong() {
    for (let i: number = 1; i <= 9; i++) {
        for (let j: number = 1; j <= 9; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log('----------------');
    }
}

bangCuuChuong();