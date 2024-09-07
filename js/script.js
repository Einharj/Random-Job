function submitForm() {
    // Mengambil nilai dari form "Name"
    const names = [
        document.getElementById('name1').value,
        document.getElementById('name2').value,
        document.getElementById('name3').value
    ];

    // Mengambil nilai dari form "Task"
    const tasks = [
        document.getElementById('var1').value,
        document.getElementById('var2').value,
        document.getElementById('var3').value
    ];

    // Mengacak array nama dan task
    const shuffledNames = shuffleArray(names);
    const shuffledTasks = shuffleArray(tasks);

    // Menampilkan hasil pengacakan di area RESULT secara terpisah
    document.getElementById('nameResult1').innerHTML = `<h2>${shuffledNames[0]}</h2>`;
    document.getElementById('nameResult2').innerHTML = `<h2>${shuffledNames[1]}</h2>`;
    document.getElementById('nameResult3').innerHTML = `<h2>${shuffledNames[2]}</h2>`;

    document.getElementById('taskResult1').innerHTML = `<h2>${shuffledTasks[0]}</h2>`;
    document.getElementById('taskResult2').innerHTML = `<h2>${shuffledTasks[1]}</h2>`;
    document.getElementById('taskResult3').innerHTML = `<h2>${shuffledTasks[2]}</h2>`;
}

// Fungsi untuk mereset hasil
function resetResults() {
    document.getElementById('nameResult1').innerHTML = '<h2>.......</h2>';
    document.getElementById('nameResult2').innerHTML = '<h2>.......</h2>';
    document.getElementById('nameResult3').innerHTML = '<h2>.......</h2>';

    document.getElementById('taskResult1').innerHTML = '<h2>.......</h2>';
    document.getElementById('taskResult2').innerHTML = '<h2>.......</h2>';
    document.getElementById('taskResult3').innerHTML = '<h2>.......</h2>';
}

// Fungsi untuk mengacak array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}